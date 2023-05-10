import {useEffect} from "react";

export default function meet () {

    useEffect(() => {
        window.location.assign('https://us04web.zoom.us/j/9391146662?pwd=buRnOgaCskZB2gZFf60CYe3c4Vmhvq.1')
    })

    return (<>

    <section className={`py-16 lg:py-20 flex justify-center items-center text-2xl text-white font-bold`}>
        Redirecting you to Zoom...
    </section>

    </>)
}