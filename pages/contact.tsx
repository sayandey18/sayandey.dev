import React, { useState } from 'react';
import {
  BsQuestionCircle,
  BsFillJournalBookmarkFill,
  BsEnvelopePaperHeart
} from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import Container from 'components/Container';
import LoadingSpinner from 'components/LoadingSpinner';

export default function Contact() {
  const [inputs, setInputs] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  });

  const [form, setForm] = useState({ state: '', message: '' });

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (inputs.fname && inputs.email && inputs.phone && inputs.message) {
      setForm({ state: 'loading', message: 'Form data loading.' });
      try {
        const res = await fetch(`api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: 'error',
            message: error
          });
          return;
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.'
        });

        setInputs({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          message: ''
        });
        toast.success('Message sent successfully!');
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong'
        });
      }
    }
  };

  return (
    <Container
      title="Contact – Sayan Dey"
      description="Hi my name is Sayan Dey. I'm always happy to hear from you and answer any questions you may have."
    >
      <div className="flex flex-col items-start justify-center max-w-[45rem] mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Contact Me
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Thank you for visiting our website. We are always happy to hear from
          you and answer any questions you may have. Please fill out the form
          below with your name.
        </p>

        <div className="w-full mx-auto">
          <div className="mt-4 grid items-center lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="flex flex-col border border-blue-100 shadow-3xl rounded-xl p-6 lg:p-8 bg-white dark:border-gray-800 dark:bg-black-charcoal">
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  duration: 5000
                }}
              />
              <form onSubmit={(e) => onSubmitForm(e)}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fname" className="sr-only">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        value={inputs.fname}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 bg-slate-100 dark:bg-black-ebony dark:border-gray-700 dark:text-gray-400"
                        placeholder="First Name*"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="lname" className="sr-only">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lname"
                        value={inputs.lname}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 bg-slate-100 dark:bg-black-ebony dark:border-gray-700 dark:text-gray-400"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={inputs.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 bg-slate-100 dark:bg-black-ebony dark:border-gray-700 dark:text-gray-400"
                      placeholder="Email*"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={inputs.phone}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 bg-slate-100 dark:bg-black-ebony dark:border-gray-700 dark:text-gray-400"
                      placeholder="Phone Number*"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Messages
                    </label>
                    <textarea
                      id="message"
                      value={inputs.message}
                      onChange={handleChange}
                      rows={4}
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 bg-slate-100 dark:bg-black-ebony dark:border-gray-700 dark:text-gray-400"
                      placeholder="Messages*"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="inline-flex justify-center gap-1 items-center px-4 py-3 bg-blue-600 disabled:opacity-50 disabled:hover:bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md"
                  >
                    {form.state === 'loading' ? (
                      <>
                        <LoadingSpinner />
                        <p className="ml-1">Sending...</p>
                      </>
                    ) : (
                      'Send inquiry'
                    )}
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-800 p-4">
              <div className="flex gap-x-7 py-6">
                <BsQuestionCircle className="h-11 w-11 text-gray-600 dark:text-gray-200" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Guestbook
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Search our Guestbook for answers to anything you might ask.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    href="#"
                  >
                    Visit Guestbook
                  </a>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <BsFillJournalBookmarkFill className="h-9 w-9 text-gray-600 dark:text-gray-200" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Developer Blog
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Check out our latest blogs and tutorial guide.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    href="#"
                  >
                    visit Blog
                  </a>
                </div>
              </div>

              <div className=" flex gap-x-7 py-6">
                <BsEnvelopePaperHeart className="h-14 w-14 text-gray-600 dark:text-gray-200" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Contact us by email
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    If you wish to write us an email instead please use this
                    email address.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    href="#"
                  >
                    sayan@sayandey.dev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
