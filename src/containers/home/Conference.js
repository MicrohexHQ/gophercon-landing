import React from 'react'

const events = [
  {
    highlighted: false,
    time: '08:00',
    title: 'Check-in',
  },
  {
    highlighted: false,
    time: '08:45',
    title: 'Welcome',
  },
  {
    highlighted: false,
    time: '09:00',
    title: 'Opening - 9 Years of Go',
    desc: 'An opening keynote, quick brief through timeline of Go over 9 years. Welcome to GopherCon Vietnam 2018.',
    speaker: {
      avatar:
        'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/15541993_10208099369785034_6498331180862958572_n.jpg?_nc_cat=103&_nc_ht=scontent.fsgn5-7.fna&oh=04dbcff49176634d78d38c88a9370c91&oe=5CB146F3',
      name: 'Vu Nguyen',
      desc: 'Member @ Golang Vietnam',
    },
    link: 'https://ask.gophercon.vn/event/FEDN',
  },
  {
    highlighted: false,
    time: '09:45',
    title: 'Starting Serverless with Go',
    desc:
      'Serverless – so hot right now. All the big players of cloud platforms have launched some kind of runtime to execute code. By focusing on coding business logic this leads to short production-ready developments. This talk aims to show why Go is a good choice to start with serverless.',
    speaker: {
      avatar:
        'https://papercallio-production.s3.amazonaws.com/uploads/user/avatar/35028/TRIODOS_STM_RGB_7414_closeup.jpg',
      name: 'Stefan Meissner',
      desc: 'Backend Developer @ TUI',
    },
    link: 'https://ask.gophercon.vn/event/VGAF',
  },
  {
    highlighted: false,
    time: '10:30',
    title: 'Go on a journey away from the mammoth C/C++ monolith',
    desc:
      'There is no rocket science or big fancy voila neat trick on Golang here. This would just be our actual journey, from some home cooked C extension mod for Apache httpd and our own templating engine to a grand shift toward Golang, what we have done, how did we go-on, what we have not done',
    speaker: {
      avatar:
        'https://papercallio-production.s3.amazonaws.com/uploads/user/avatar/38506/Profile_photo.png',
      name: 'Kelvin Vuong',
      desc: 'CTO @ Chotot',
    },
    link: 'https://ask.gophercon.vn/event/RDKD',
  },
  {
    highlighted: false,
    time: '11:00',
    title: 'Anatomy of a Docker container',
    desc:
      "What are Containers and How is Docker made? It's a bunch of namespaces and cgroups put together to build the process isolations that we see. What are namespaces and how do they operate? The talk invokes one Linux namespace at a time, as system calls from a Golang code, up to a full-fledged container",
    speaker: {
      avatar:
        'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/8uxdute0wr_Screen%20Shot%202018-11-10%20at%203.04.26%20PM.png',
      name: 'Piyush Verma',
      desc: 'Director of Engineering @ Trusting Social',
    },
    link: 'https://ask.gophercon.vn/event/KIRP',
  },
  {
    highlighted: false,
    time: '11:45',
    title: 'Lunch',
  },
  {
    highlighted: false,
    time: '13:00',
    title: 'Golang and infrastructure works',
    desc:
      'How we use Go to enable a fast pace development and deployment pipeline.',
    speaker: {
      avatar:
        'https://pbs.twimg.com/profile_images/972278423975485440/7Ep7AXKb_400x400.jpg',
      name: 'Tam Nguyen',
      desc: 'Software & DevOps Engineer @ Anduin Transactions',
    },
    link: 'https://ask.gophercon.vn/event/NXCE',
  },
  {
    highlighted: false,
    time: '13:45',
    title: 'How we build scalable architecture at Sendo',
    desc:
      'This talk is how Sendo use microservices with gRPC, Protobuf and some architectures to speed up system.',
    speaker: {
      avatar:
        'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/e6f4b652er_viettran_speaker.jpg',
      name: 'Viet Tran',
      desc: 'Solution Architect @ Sendo',
    },
    link: 'https://ask.gophercon.vn/event/VIOB',
  },
  {
    highlighted: false,
    time: '14:30',
    title: `An investigative walk through of Go channels`,
    desc:
      'This talk deeps dive into the inner workings of Go’s channels using an interactive debugger to understand it’s strengths and shortcomings. ',
    speaker: {
      avatar:
        'https://s3-ap-southeast-1.amazonaws.com/kipalog.com/8uirzjki7c_Screen%20Shot%202018-11-10%20at%204.58.34%20PM.png',
      name: (
        <a
          className="text-black"
          href="https://twitter.com/algogrit"
          rel="noopener noreferrer"
          target="_blank"
        >
          Gaurav Agarwal
        </a>
      ),
      desc: 'Indie Software Engineer',
    },
    link: 'https://ask.gophercon.vn/event/YOXH',
  },
  {
    highlighted: false,
    time: '15:00',
    title: 'Large Scale Data Capture & Experimentation Platform at Grab',
    desc:
      'Come to learn how we built a system to experiment and rollout features across hundreds of microservices at Grab. The talk is also inclusive of a high-performance event tracking system which captures hundreds of thousands of events per second from mobile apps and backend services and makes them easily queryable through SQL.',
    speaker: {
      avatar: 'https://avatars2.githubusercontent.com/u/583116?s=460&v=4',
      name: 'Roman Atachiants',
      desc: 'Head of Engineering @ Grab',
    },
    link: 'https://ask.gophercon.vn/event/KYMW',
  },
  {
    highlighted: true,
    time: '15:45',
    title: 'Production Ready Microservices at Scale',
    desc:
      'Writing Microservices which can withstand the unpredictable nature of the production environment at scale is a non-trivial task. Certain practices can help make our systems 6 predictable, transparent and resilient. For developers this means more confident and continuous deployments.',
    speaker: {
      avatar:
        'https://secure.gravatar.com/avatar/15a0a233d3bf86fea7bbaa525f33897d?s=500',
      name: 'Rajeev N Bharshetty',
      desc: 'Product Engineer @ GO-JEK',
    },
    link: 'https://ask.gophercon.vn/event/GYWJ',
  },
  {
    highlighted: false,
    time: '16:30',
    title: 'Closing',
  },
]

const ConferenceSection = () => (
  <section
    id="conference"
    className="bg-grey-lightest sm:pt-32 pt-18 sm:pb-40 pb-32"
  >
    <div className="container pb-8r">
      <div className="row flex items-center flex-wrap">
        <div className="col w-full">
          <h2 className="text-primary text-3xl text-center mb-16">
            08 Dec - Conference
          </h2>

          <div className="timeline">
            {events.map(
              ({ highlighted, time, title, desc, speaker, link }, index) => (
                <div className="row flex" key={time}>
                  <div className="col timeline__time flex flex-col items-center">
                    <span
                      className={
                        highlighted
                          ? 'text-2xl font-bold text-primary mb-3 mt-3'
                          : 'text-2xl mb-3'
                      }
                    >
                      {time}
                    </span>
                    <div className="timeline__line bg-primary flex-1" />
                  </div>
                  <div
                    className={
                      'col' + (index === events.length - 1 ? '' : ' mb-16')
                    }
                  >
                    <h4
                      className={
                        'text-xl mb-4 ' + (highlighted ? 'mt-3' : 'mt-1')
                      }
                    >
                      {title}
                    </h4>
                    {desc && <p>{desc}</p>}
                    {speaker && (
                      <div className="flex sm:flex-row flex-column flex-wrap items-center justify-between">
                        <div className="flex items-center mt-4">
                          <div
                            className="timeline__avatar"
                            style={{
                              backgroundImage: `url(${speaker.avatar})`,
                            }}
                          />
                          <div className="pl-4">
                            <h6 className="text-base">{speaker.name}</h6>
                            <div className="font-normal">{speaker.desc}</div>
                          </div>
                        </div>
                        {link && (
                          <a
                            className="font-medium px-5 py-3 leading-none text-white bg-primary inline-block mt-6"
                            href={link}
                          >
                            Ask question
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ConferenceSection
