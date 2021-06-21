import illustration from '../data/Contact-Illustration.js'
import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onMessageSubmitted = (e) => {
    e.preventDefault()
    toast.success(`Your message went perfectly, ${name}`)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <ToastContainer />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="pt-6 text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100  text-center">
              Contact Bharadwaj Giridhar
            </h1>
          </div>
          <div className="text-gray-500 dark:text-gray-400 mt-2 text-center">
            I talk a lot about Startups, Tech, Finance & Philosophy. Just come say Hi{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
          </div>
          <section>
            <div className="max-w-screen-xl mt-12 px-2 md:px-8 grid gap-8 grid-cols-1 md:grid-cols-2 mx-auto text-gray-900">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100">
                    Let's talk about everything!
                  </h2>
                  <div className="text-gray-500 dark:text-gray-400 mt-4">
                    Hate forms? Send an email to bg[at]goforbg.com.
                  </div>
                </div>
                <div className="mt-8 text-center">{illustration}</div>
              </div>
              <form onSubmit={onMessageSubmitted}>
                <div>
                  <span className="uppercase text-sm text-gray-600 font-bold">Name</span>
                  <input
                    type="text"
                    required
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    htmlFor="name"
                    className="w-full bg-white dark:bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="mt-8">
                  <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    value={email}
                    htmlFor="email"
                    className="w-full bg-white dark:bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="mt-8">
                  <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    className="w-full bg-white dark:bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-900 dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-8 px-3 py-2 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
