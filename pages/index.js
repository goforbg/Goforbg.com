import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
            Who's BG?
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Founder at Dotpush.</div>
            <div className="text-gray-500 dark:text-gray-400">Android at Workllama.</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Bharadwaj Giridhar (@goforbg) is an Entrepreneur, Startup Enthusiast & Software
              Engineer. Starting from the age of 12 he has been an avid blogger, and has always been
              building & shipping tech solutions round the globe.
            </p>
            <p>
              He's currently building DotPush, an efficient way to agendize, automate agile
              meetings. Previously indiehacked several projects including Androar - a Tech blog &
              youtube channel focused on tech, Foodmux - a youtube video evolved to an app, for
              connecting with fellow foodies.
            </p>
            <p>
              He's currently a full time Android Engineer at Workllama and has shipped 8+ Android
              Apps to 100K+ users. He has over 2 years of experience in architecting end to end
              Android Applications & loves open source software.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
