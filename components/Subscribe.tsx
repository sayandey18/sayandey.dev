import { useState, useRef } from 'react';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Form, FormState, Subscribers } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const subscriberCount = new Number(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const email = inputEl.current?.value;
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    });

    const { error } = await res.json();

    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    if (inputEl.current) {
      inputEl.current.value = '';
    }
    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`
    });
  };

  return (
    <div className="border border-blue-100 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-black-charcoal">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get emails from me about web development, tech, and early access to new
        articles.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="sayan@sayandey.dev"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-black-ebony text-gray-900 dark:text-gray-100 pr-32"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-center	text-gray-800 dark:text-gray-200">
          {`${
            subscriberCount ? subscriberCount.toLocaleString() : '-'
          } subscribers – `}
          <a
            href="https://github.com/sayandey18/sayandey.dev/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all GitHub issues
          </a>
        </p>
      )}
    </div>
  );
}
