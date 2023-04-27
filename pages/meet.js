import {useEffect} from "react";

export default function meet () {

    useEffect(() => {
        window.location.assign('https://meet.google.com/ocg-bsyh-vbk')
    })

    return (<>

    <section className={`py-16 lg:py-20 flex justify-center items-center text-2xl text-white font-bold`}>
        Redirecting you to Google Meet...
    </section>

    </>)
}