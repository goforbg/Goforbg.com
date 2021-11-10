import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const WisdomBitmoji = '/static/images/life_events/pandemic.png'
const AxilorBitmoji  =  '/static/images/life_events/axilor.png'
const AustraliaBitmoji  =  '/static/images/life_events/australia.png'
const GymBitmoji  =  '/static/images/life_events/gym.png'
const CollegeBitmoji  =  '/static/images/life_events/college.png'
const SchoolBitmoji  =  '/static/images/life_events/school.png'

export default function Timeline() {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
          Life so far
        </h1>
      </div>
      <section className="text-gray-400 body-font">
        <div className="container py-10 mx-auto flex flex-wrap">
          {lifeEvents.map((event) => lifeEvent(event))}
        </div>
      </section>
    </>
  )
}
function lifeEvent(lifeEvent) {
  return (
    <div key={lifeEvent.event.title} className="flex relative pt-10 items-center">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10 title-font font-medium text-sm">
        <span role={lifeEvent.stepper.role} aria-label={lifeEvent.stepper.label}>
          {lifeEvent.stepper.icon}
        </span>
      </div>
      <div className="flex-grow pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="relative flex-shrink-0 w-48 h-48 text-primary rounded-full inline-flex items-center justify-center">
          <img
            src={lifeEvent.image.path}
            alt={lifeEvent.image.label}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h1 className="title-font text-gray-700 dark:text-white mb-5 text-2xl font-bold">
            {lifeEvent.event.title}
          </h1>
          <p
            className="mt-8 leading-relaxed text-gray-700 dark:text-white"
            dangerouslySetInnerHTML={{ __html: lifeEvent.event.desc }}
          ></p>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="mt-6 flex justify-between px-4 py-2 text-sm font-bold text-left text-white bg-primary rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                  <span>{lifeEvent.learning.title}</span>
                  <ChevronUpIcon
                    className={`${open ? '' : 'transform rotate-180'} ml-1 w-5 h-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <p
                    className="mt-8 leading-relaxed text-gray-700 dark:text-white"
                    dangerouslySetInnerHTML={{ __html: lifeEvent.learning.desc }}
                  ></p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  )
}

const corona_2020_to_2021 = {
  stepper: {
    icon: '💸',
    label: 'Weath',
    role: 'img',
  },
  image: {
    label: 'Bhardwaj Giridhar Bitmoji reading a Book',
    path: WisdomBitmoji,
  },
  learning: {
    title: 'What I learnt',
    desc:
      '<ul><li>To create wealth, your rewards should never be linked to your time or repetitiveness.</li><br/><li>A lot of times, Anger is just fear in disguise.</li></ul>',
  },
  event: {
    title: 'Wisdom Fuelled Pandemic',
    desc:
      'I joined Workllama as an Android Engineer. I learned how to architect apps at scale. Conducted 30+ interviews, coded 5+ libraries. Learned how to build & ship applications using <b>Next js, React, Tailwind, Node js, Docker, and more!</b> <br/><br/> I discovered Naval Ravikanth, which led me to a gold pot of Entrepreneurship and Finance wisdom. I hunted several top-notch ProductHunt posts. ',
  },
}

const axilor_2019 = {
  stepper: {
    icon: '💻',
    label: 'Code',
    role: 'img',
  },
  image: {
    label: 'Bhardwaj Giridhar Coding on a laptop',
    path: AxilorBitmoji,
  },
  learning: {
    title: 'What I learnt',
    desc:
      "<ul><li>The difference between a winner and a loser is defined by quitting not failing.</li><br/><li>Don't listen to people, just observe their actions.</li></ul>",
  },
  event: {
    title: 'The new kid on the block',
    desc:
      'When I hear <b>"Bengaluru, Tech, & Startups"</b> my brain started lighting up. I had scored an Android internship with immense efforts at Bolkar (previously Pascolan) - a startup aiming to be the #1 Indian vernacular audio Q&A platform. <br/><br/>I could now suddenly write design libraries. Bolkar was a part of <b>Axilor Ventures</b> - One of India\'s finest Startup Accelerator that hosted 14 more top-tier teams that cohort, which made me interact with several second-time founders from IITs and IIMs.',
  },
}

const melbourne_2019 = {
  stepper: {
    icon: '✈',
    label: 'Travel',
    role: 'img',
  },
  image: {
    label: 'Bhardwaj Giridhar at Australia',
    path: AustraliaBitmoji,
  },
  learning: {
    title: 'What I learnt',
    desc:
      '<ul><li>Losses are always perceived bigger than wins, use this information to your advantage.</li><br/><li>Change is possible only when you truly observe the constant state of change.</li></ul>',
  },
  event: {
    title: 'Hit the road Jack!',
    desc:
      'I was interning at <b>Swinburne University, Melbourne</b>. It was my first time flying abroad, and it was amazing to write a paper on the Melbourne Water Plant. I got to interact with people from all over the world, which boosted my communication skills.<br/><br/> My paper was about water meters used in apartments that digitally track usage to deliver water bills and tap water recycled as consumables, which inspired me to learn Python.  It felt like I restarted life, and I was so grateful I could view life through a different lens. ',
  },
}

const weight_loss_2018 = {
  stepper: {
    icon: '🦇',
    label: 'Batman',
    role: 'img',
  },
  image: {
    label: 'Bharadwaj Giridhar Weight loss',
    path: GymBitmoji,
  },
  learning: {
    title: 'What I learnt',
    desc:
      '<ul><li>Whatever we perceive as truths about our ego are just repetitive manifestations.</li><br/><li>We fall so we can learn to pick ourselves back up - faster & stronger.</li></ul>',
  },
  event: {
    title: 'The Dark Knight Rises',
    desc:
      'Apart from the hackathons & workshops in college, I used to overeat as an escape mechanism. I saw the Dark Knight Rises by Nolan, and it was at <u><a href="https://www.youtube.com/watch?v=DjffIi2Pl7M" rel="noreferrer" target="_blank">that</a></u> moment I decided to change my life. <b>I lost 30+ kilos (66+ pounds)</b> in the next five months. <br/><br/> I started waking early to code every day. Graduated a course by the Indian Ministry of Commerce and Industry about the fundamentals of startups, consisting of content from successful entrepreneurs like Bhavish Agarwal from Ola and Girish Mathrubootham from Freshworks.',
  },
}

const college_disaster = {
  stepper: {
    icon: '🎉',
    label: 'party',
    role: 'img',
  },
  image: {
    label: 'Bharadwaj Giridhar going to college',
    path: CollegeBitmoji,
  },
  learning: {
    title: 'What I learnt',
    desc:
      "<ul><li>Travel enables new perspectives to broaden your mind.</li><br/><li>It's okay to be human and mess up once in a while, you'll bounce back.</li></ul>",
  },
  event: {
    title: 'College & Hackathons',
    desc:
      'I strongly believe the best way to learn Programming is to <b>do and learn yourself.</b> I partied a lot! My lifeline during College was hackathons & workshops. I participated in hackathons across the country at CIT, Prodigy, IIT BHU, Smart India Hackathon, & more.<br/><br/> I learned a lot about Photography, improved my Public Speaking, Choreographic, Video-editing skills, and maintained 2 Youtube Channels - Androar & Foodmux. I Partnered up with a dozen of 3-star restaurants.',
  },
}

const boss_baby = {
  stepper: {
    icon: '👶',
    label: 'boss',
    role: 'img',
  },
  image: {
    label: 'Bharadwaj Giridhar going to school',
    path: SchoolBitmoji,
  },
  learning: {
    title: 'What I learnt',
    desc:
      "<ul><li>Money won't make you happy, but it gives you the choice to pick happiness.</li><br/><li>People will first try to stop you from doing something ambitious, it's human nature.</li></ul>",
  },
  event: {
    title: 'Best Student Entrepreneur',
    desc:
      "It all started when I jailbroke my mom's phone to run some games. It got me interested in smartphones, tech, and my blogging journey since the age of 12. I then started earning from Ad revenues, Writing, Migrating blog hosts, and running SEO Optimizations.<br/><br/> I got awarded as <b>the best student entrepreneur</b> for founding Twecco Solutions. The freelance firm had over 50 recurring clients. My ambition had become very clear.",
  },
}

const lifeEvents = [
  corona_2020_to_2021,
  axilor_2019,
  melbourne_2019,
  weight_loss_2018,
  college_disaster,
  boss_baby,
]
