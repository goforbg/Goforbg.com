import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import Timeline from '@/components/Timeline'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}`}
      />
      <About />
      <Timeline />
    </>
  )

  function About() {
    return (
      <section>
        {/* Bio section - At the top */}
        <div className="max-w-5xl mx-auto pt-10 pb-12 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 mb-6">
            <Image
              src={siteMetadata.image}
              alt="avatar"
              width={120}
              height={120}
              className="w-[120px] h-[120px] rounded-full mb-4 sm:mb-0"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 leading-[1.6]">
                {siteMetadata.author}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-[1.7]">
                Founder — Inboxpirates, Tuco AI, Foxwell & Pierce Capital Group.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-[1.7]">
                I've built and operated high-volume email infrastructure, fixed deliverability
                failures in SaaS & fintech, and run a $100k+ ARR consulting practice focused on
                revenue infra. I code SaaS apps. I buy stocks.
              </p>
              <div className="mt-4">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>

        {/* Hero - Single column, words only */}
        <div className="max-w-5xl mx-auto pt-16 pb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4 leading-[1.6]">
            Most GTM stacks fail silently.
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 leading-[1.6]">
            I fix the ones where email breaks revenue. I build SaaS apps. I buy stocks.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-[1.7]">
            Email Deliverability, Lead generation, production-ready code, growth systems, and
            revenue infra for SaaS & financial services.
          </p>
        </div>

        {/* Credibility Math - Social proof immediately after hero */}
        <div className="max-w-5xl mx-auto pb-16 border-b border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-[1.7]">
            Trusted in production by:
          </p>
          <p className="text-base text-gray-900 dark:text-gray-100 font-medium leading-[1.7]">
            YCombinator & Series A to Nasdaq SaaS companies • Fintech • Enterprise revenue teams
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 mt-2 leading-[1.7]">
            Duocircle · Atlan · Bench (Now Mainstreet) · Kintsugi · GD Group
          </p>
        </div>

        {/* What I do - Outcomes, not tasks */}
        <div className="max-w-5xl mx-auto pt-16 pb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-[1.6]">
            What I actually do
          </h2>
          <ul className="space-y-4 text-base text-gray-700 dark:text-gray-300 leading-[1.7]">
            <li>I code B2B SaaS apps that are business critical.</li>
            <li>I fix the ones where email breaks revenue.</li>
            <li>Email reaches the inbox at scale — not just in tests</li>
            <li>GTM systems stop breaking when volume increases</li>
            <li>Post my journey of building a $1M ARR SaaS business.</li>
            <li>Shit post on Twitter(X) about the value stocks.</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 leading-[1.7]">
            Email infra · lifecycle systems · compliance · data plumbing
          </p>
        </div>

        {/* Contact CTA - Moved up */}
        <div className="max-w-5xl mx-auto pt-8 pb-12">
          <CTA />
        </div>

        {/* Quiet CTA */}
        <div className="max-w-5xl mx-auto pt-8 pb-16 border-t border-gray-200 dark:border-gray-700">
          <p className="text-base text-gray-600 dark:text-gray-400 leading-[1.7] mb-2">
            If your GTM or email stack is failing in production,
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-[1.7]">
            you can reach me{' '}
            <a
              href={`mailto:${siteMetadata.email}`}
              className="text-gray-900 dark:text-gray-100 underline"
            >
              here
            </a>
            .
          </p>
        </div>
      </section>
    )
  }
}
function SocialIcons() {
  return (
    <div className="flex item-center space-x-3">
      <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
      <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
      <SocialIcon kind="instagram" href={siteMetadata.instagram} />
      <SocialIcon kind="twitter" href={siteMetadata.twitter} />
      <SocialIcon kind="github" href={siteMetadata.github} />
      <SocialIcon kind="facebook" href={siteMetadata.facebook} />
      <SocialIcon kind="youtube" href={siteMetadata.youtube} />
    </div>
  )
}
