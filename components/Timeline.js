import Image from 'next/image'
import WisdomBitmoji from 'public/static/images/life_events/pandemic.png'
import AxilorBitmoji from 'public/static/images/life_events/axilor.png'
import AustraliaBitmoji from 'public/static/images/life_events/australia.png'
import GymBitmoji from 'public/static/images/life_events/gym.png'

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
          {lifeEvents.map((event) => lifeEvent(event))}
        </div>
      </section>
    </>
  )
}
function lifeEvent(lifeEvent) {
  return (
    <div key={lifeEvent.event.title} className="flex relative pt-10 pb-20 items-center">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-0.5 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
        <span role={lifeEvent.stepper.role} aria-label={lifeEvent.stepper.label}>
          {lifeEvent.stepper.icon}
        </span>
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="relative flex-shrink-0 w-48 h-48 text-indigo-400 rounded-full inline-flex items-center justify-center">
          <Image
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
  event: {
    title: 'Wisdom Fuelled Pandemic',
    desc:
      "The pandemic was a huge turn in my life. I had discovered Naval Ravikanth, which was the butterfly to a <b>storm of finance, entrepreneurship & self-help books</b> . I have always been intrigued by wealth, but the pandemic that gave rise to extra time, more knowledge consisely connected the dots on what I exactly needed to do. I became very clear on what I had to do next. A new chapter of wealth creation begins. <br /> <br /> I joined Workllama as an Android Engineer, and learnt how to architect apps at scale. Conducted 50+ interviews, coded 5+ libraries. Learnt how to build & ship applications using Next js, React, Tailwind, Node js, Docker and more! Hunted several <b>product of the day</b> ProductHunt posts. I had previously been shying away from learning new technologies, but I couldn't stop here! The more I read about economy, the more I understood the nuances of society.",
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
  event: {
    title: 'The new kid on the block',
    desc:
      'I had scored an Android internship with huge efforts. I picked Android because I had seen the boom of Whatsapp and the irrepeclable value proposition it offers, and its arguably monopolistic status. Despite getting placed with many MNCs at my college, it was time to take control of my life. When you say the words <b>Bengaluru, Tech or Startups</b> my brain strarted lighting up. I was born in a generation inspired by The Social Network, so it was a no brainer to be the underdog. I had interned at Bolkar (previously Pascolan) a startup aiming to be the #1 Indian vernacular audio Q&A platform. <br/><br/> While the movie potrayals of startups are extremely glamorous, the reality can hurt a bit. I had started to code only in the later parts of college, and it meant work on Saturday Nights at 1 AM. The pain soon numbed and what emerged was a developer who could now suddenly write design libraries. Bolkar was a part of <b>Axilor Ventures</b> - An Startup Accelator that hosted not only us, but 13 more top-tier teams. This made me interact with several founders who had already been successful in their past, graduating from IITs and IIMs. ',
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
  event: {
    title: 'Hit the road Jack!',
    desc:
      'Life is an endless series of train wrecks with only brief commercial-like breaks of happiness. This had been the ultimate commercial break. I was interning at <b>Swinburne University, Melbourne</b>. It was my first time flying abroad, and it was an amazing experience to write a paper on the Melbourne Water Plant. I got to interact with people from all over the world, It helped me boost my communication skills. I did not know that in some countries outside India, you could drink the water right from the tap, and that was what my paper was about. <br/><br/> The water metres used in apartments are also tracked digitally to deliver water bills over email, and this inspired me to learn Python. I looked around and it gave me hope after 4 stressful years. It felt like I restarted life, and I was so grateful I could view life in a different lens. Everything we think is true about ourselves is just manifestation of what we believe and the longer we stay in the same place, the more narrow-minded we become. Travel is an amazing way to break stereotypes about yourself and this helped me do exactly that.',
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
  event: {
    title: 'The Dark Knight Rises',
    desc: 'Contemplating the existence of my life had become my to-go hobby. ',
  },
}

const lifeEvents = [corona_2020_to_2021, axilor_2019, melbourne_2019, weight_loss_2018]
