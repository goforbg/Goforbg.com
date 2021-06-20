export default function CTA() {
  return (
    <>
      <section>
        <div className="lg:my-14 md:my-5 sm:my-2 p-2 flex items-center justify-between text-gray-800">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">
            <div className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                <svg
                  className="w-6 h-6 fill-current text-green-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-grow flex flex-col ml-4">
                <span className="text-xl font-bold text-black dark:text-white">Get in touch</span>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-100" role="img" aria-label="wave">
                    No pressure, just say hi 👋
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                <svg
                  className="w-6 h-6 fill-current text-green-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-grow flex flex-col ml-4">
                <span className="text-xl font-bold text-black dark:text-white">View Resume/CV</span>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-100">ATS Compatible.</span>
                </div>
              </div>
            </div>

            <div className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                <svg
                  className="w-6 h-6 fill-current text-green-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-grow flex flex-col ml-4">
                <span className="text-xl font-bold text-black dark:text-white">View Projects.</span>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-100">I ♥ Open-Source.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
