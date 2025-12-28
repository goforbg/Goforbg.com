export default function CTA() {
  return (
    <>
      <section>
        <div className="lg:my-14 md:my-5 sm:my-2 p-2 flex items-center justify-between text-gray-800">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">
            <div className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <div className="flex flex-shrink-0 items-center justify-center bg-primary h-16 w-16 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </div>
              <div
                className="flex-grow flex flex-col ml-4"
                role="button"
                tabIndex="0"
                onKeyPress={() => {
                  window.location = '/contact'
                }}
                onClick={() => {
                  window.location = '/contact'
                }}
              >
                <span className="text-xl font-bold text-black dark:text-white">Get in touch</span>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-100" role="img" aria-label="wave">
                    No pressure. Say hi 👋
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <div className="flex flex-shrink-0 items-center justify-center bg-primary h-16 w-16 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div
                className="flex-grow flex flex-col ml-4"
                role="button"
                tabIndex="0"
                onKeyPress={() => {
                  window.location = 'https://linkedin.com/in/goforbg'
                }}
                onClick={() => {
                  window.location = 'https://linkedin.com/in/goforbg'
                }}
              >
                <span className="text-xl font-bold text-black dark:text-white">View LinkedIn</span>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-100">Work History.</span>
                </div>
              </div>
            </div>

            <div className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
              <div className="flex flex-shrink-0 items-center justify-center bg-primary h-16 w-16 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div
                className="flex-grow flex flex-col ml-4"
                role="button"
                tabIndex="0"
                onKeyPress={() => {
                  window.location = '/projects'
                }}
                onClick={() => {
                  window.location = '/projects'
                }}
              >
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
