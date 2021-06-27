import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import Card from '@/components/Card'
import { PageSeo } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSeo
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/projects`}
      />
      <section>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My open-source projects are available at{' '}
            <b>
              <u>
                <a href="http://github.com/goforbg" target="_blank" rel="noreferrer">
                  @goforbg
                </a>
              </u>{' '}
            </b>
            &{' '}
            <b>
              <u>
                <a href="http://github.com/codewithbg" target="_blank" rel="noreferrer">
                  @codewithbg
                </a>
              </u>{' '}
            </b>
            at Github.
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                actionTag={d.actionTag}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
