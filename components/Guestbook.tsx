import { useState, useRef, Suspense } from 'react';
import { format } from 'date-fns';
import { signIn, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr';

import { guestbook } from '@prisma/client';
import fetcher from 'lib/fetcher';
import { Form, FormState } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

function GuestbookEntry({ entry, user }) {
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e) => {
    e.preventDefault();

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE'
    });

    mutate('/api/guestbook');
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="prose dark:prose-dark w-full break-words">{entry.body}</div>
      <div className="flex items-center space-x-3">
        <p className="text-sm text-gray-500">{entry.created_by}</p>
        <span className=" text-gray-200 dark:text-gray-800">/</span>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </p>
        {user && entry.created_by === user.name && (
          <>
            <span className="text-gray-200 dark:text-gray-800">/</span>
            <button
              className="text-sm text-red-600 dark:text-red-400"
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Guestbook({ fallbackData }) {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data: entries } = useSWR<guestbook[]>('/api/guestbook', fetcher, {
    fallbackData
  });

  const leaveEntry = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    inputEl.current.value = '';
    mutate('/api/guestbook');
    setForm({
      state: Form.Success,
      message: `Hooray! Thanks for signing my Guestbook.`
    });
  };

  return (
    <>
      <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-black-charcoal">
        <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
          Sign the Guestbook
        </h5>
        <p className="my-1 text-gray-800 dark:text-gray-200">
          Share a message for a future visitor of my site.
        </p>
        {!session && (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            href="/api/auth/signin/github"
            className="text-white bg-black-ebony font-medium text-sm rounded h-8 inline-flex items-center dark:bg-gray-200 dark:text-gray-900 px-5 mb-2"
            onClick={(e) => {
              e.preventDefault();
              signIn('github');
            }}
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            Sign in with Github
          </a>
        )}
        {session?.user && (
          <form className="relative my-4" onSubmit={leaveEntry}>
            <input
              ref={inputEl}
              aria-label="Your message"
              placeholder="Your message..."
              required
              className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <button
              className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
              type="submit"
            >
              {form.state === Form.Loading ? <LoadingSpinner /> : 'Sign'}
            </button>
          </form>
        )}
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="text-sm text-gray-800 dark:text-gray-200">
            Your information is only used to display your name and reply by
            email.
          </p>
        )}
      </div>
      <div className="mt-4 space-y-8">
        {entries?.map((entry) => (
          <GuestbookEntry key={entry.id.toString()} entry={entry} user={session?.user} />
        ))}
      </div>
    </>
  );
}
