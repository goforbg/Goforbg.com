import Image from 'next/image'
import WisdomBitmoji from 'public/static/images/pandemic.png'

export default function Timeline() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
          Life so far
        </h1>
      </div>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 items-center">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              <span role="img" aria-label="Wealth">
                💸
              </span>
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="relative flex-shrink-0 w-48 h-48 text-indigo-400 rounded-full inline-flex items-center justify-center">
                <Image
                  src={WisdomBitmoji}
                  alt="BG reading books"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="title-font text-gray-700 dark:text-white mb-5 text-xl font-bold">
                  Wisdom Fuelled Pandemic
                </h2>
                <p className="leading-relaxed text-gray-700 dark:text-white">
                  The pandemic was a huge turn in my life. I had discovered Naval Ravikanth, which
                  was the butterfly to a storm of finance, entrepreneurship & self-help books. I
                  have always been intrigued by wealth, but the pandemic that gave rise to extra
                  time, more knowledge consisely connected the dots on what I exactly needed to do.
                  I became very clear on what I had to do next. A new chapter of wealth creation
                  begins.
                  <br />
                  <br />
                  Learnt how to build & ship applications using Next js, React, Tailwind, Node js,
                  Docker and more! I had previously been shying away from learning new technologies,
                  but I couldn't stop from here. The more I read about economy, the more I
                  understood the nuances of society.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-700 dark:text-white mb-1 text-xl">
                  International Waters
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard
                  cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-700 dark:text-white mb-1 text-xl">
                  The 400 Blows
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard
                  cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-700 dark:text-white mb-1 text-xl">
                  Neptune
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard
                  cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
