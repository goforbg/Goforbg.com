import { useEffect } from 'react'

export default function Calendar() {
  useEffect(() => {
    window.location.assign('https://cal.com/goforbg/15min?duration=15')
  })

  return (
    <>
      <section
        className={`py-16 lg:py-20 flex justify-center items-center text-2xl text-white font-bold`}
      >
        Redirecting you to pick a time on our calendar...
      </section>
    </>
  )
}
