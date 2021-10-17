const events_highlight = {
  sections: [
    {
      title: 'Our Events and Highlights',
      content: [
        {
          par: 'AnitaB.org Open Source Events convenes members from all backgrounds and levels of expertise throughout the year to bridge the diversity gap in Open Source development.',
        },
        {
          par: 'Our events aim to give members insights from industry experts and female-identifying leaders on a variety of topics promoting Open Source, and covering stages of Open Source development right from Introduction to Quality Assurance.',
        },
      ],
    },
    {
      events: [
        {
          title: 'Intro to Open Source',
          date: 'May 15, 2020',
          location: 'Virtual',
          timings: '4:00 pm - 5:00 pm (UTC)',
          description: [
            {
              par: 'Join us for this virtual event to learn more about beginning your journey in the Open Source world, presented by AnitaB.org London and AnitaB.org Nairobi communities.',
            },
            {
              par: 'You will learn about Small and easy steps to start your Open Source experience. What is a usual open source contribution workflow (open a pull request, waiting for reviews, …), Why it can be beneficial for your career to contribute to Open Source, How to prepare for applying to Outreachy and Google Summer of Code etc.',
            },
            {
              par: 'During the last 15 to 20 minutes, attendees can ask any questions about contributing to open source.',
            },
          ],
          highlights: {
            source: require('./../assets/events_and_highlights/5.jpg'),
          },
          know_more: {
            par: 'Feel free to contact AnitaB.org Open Source on Zulip if you need any further information about this event.',
            link: 'https://anitab-org.zulipchat.com',
          },
        },
        {
          title: 'Why I contribute to Open source?',
          date: 'July 4, 2020',
          location: 'Virtual',
          timings: '1:00 am (UTC)',
          description: [
            {
              par: 'Heard about Open Source, not sure what’s in it for you? Need a boost to begin?',
            },
            {
              par: 'This event will give you an understanding of the motivation behind individuals who contribute to open source',
            },
            {
              par: 'Open Source contributors with varying experiences will be there to share their journey, and answer your questions!',
            },
          ],
          highlights: {
            source: require('./../assets/events_and_highlights/1.png'),
          },
          know_more: {
            par: 'Feel free to contact AnitaB.org Open Source on Zulip  if you need any further information about this event.',
            link: 'https://anitab-org.zulipchat.com',
          },
        },
        {
          title: 'Engaging Open Source community in Quality Assurance',
          date: 'August 9, 2020',
          location: 'Virtual',
          timings: '1:00 am (UTC)',
          description: [
            {
              par: 'Wondered how Quality Assurance (QA) for software is performed in companies or what are the roles and responsibilities of an QA engineer?',
            },
            {
              par: 'This talk will help members grasp concepts of traditional QA methods such as formalized testing, writing and tracking bugs which are equally relevant for Open Source development.',
            },
            {
              par: 'We will explore the contrasting nature of software quality assurance under the Open Source model and traditional software development models. Consequently, their translation in practical advantages.',
            },
            {
              par: 'It will draw attention to pragmatic quality assurance practices in upstream Open Source projects like Fedora.',
            },
            {
              par: 'This will certainly give members a head-start by laying out some of the best practices and common challenges faced while quality testing Open Source products.',
            },
          ],
          highlights: {
            source: require('./../assets/events_and_highlights/2.png'),
          },
          know_more: {
            par: 'Feel free to contact AnitaB.org Open Source on Zulip if you need any further information about this event.',
            link: 'https://anitab-org.zulipchat.com',
          },
        },
        {
          title: 'Hopper India 2020',
          date: 'August 6 — August 7,2020',
          location: 'Virtual',
          timings: '4:00 am - 10:30 am (UTC)',
          description: [
            {
              par: 'Our vibrant community of women in technology from Chennai, Delhi, Hyderabad, and Pune is coming together to present this two-day virtual event modeled after the popular Grace Hopper Celebration India (GHCI) conference for women in technology.',
            },
            {
              par: 'This immersive event brings together women technologists at all levels from industry, academia, research and startups to build connections, learn, and advance their careers.',
            },
            {
              par: 'Attend inspiring keynotes and sessions led by charismatic women carrying a zeal to learn, grow and lead.',
            },
            {
              par: 'Don’t miss out on the opportunity to network with peers, and gain important resources to help you succeed in and further your career.',
            },
            {
              par: 'Our Career Fair, hosting tech giants, research labs, and financial-tech companies, offers immense job opportunities to both students and professionals.',
            },
          ],
          highlights: {
            source: require('./../assets/events_and_highlights/3.png'),
          },
          know_more: {
            par: 'Visit our official Grace Hopper Celebration India website for details about registration, eligibility, scholarships, conference sessions and FAQs.',
            link: 'https://ghcindia.anitab.org/',
          },
        },
        {
          title: 'Grace Hopper Celebration 2020',
          date: 'September 29 — October 3,2020',
          location: 'Virtual',
          timings: '10:00 am - 2:00 pm (UTC)',
          description: [
            {
              par: 'AnitaB.org’s flagship event Grace Hopper Celebration brings the research and career interests of women in computing to the forefront.',
            },
            {
              par: 'Grace Hopper Celebration (GHC), world’s largest gathering of women technologists, commemorates, celebrates, fosters and encourages the magnificent women in technology who dared to shed their inhibitions, and recognized the genius in them.',
            },
            {
              par: 'Attend inspiring keynotes and sessions, network with peers, and gain important resources to help you succeed in and further your career.',
            },
            {
              par: 'The celebration consists of a combination of technical sessions, poster sessions, career fairs, award ceremonies and more.',
            },
          ],
          highlights: {
            source: require('./../assets/events_and_highlights/4.png'),
          },
          know_more: {
            par: 'Visit our official Grace Hopper Celebration website for details about registration, eligibility, scholarships, conference sessions and FAQs.',
            link: 'https://ghc.anitab.org',
          },
        },
      ],
    },
  ],
  icon_links: {
    calendarIcon: require('./../assets/events_and_highlights/calendar.png'),
    locationIcon: require('./../assets/events_and_highlights/location.png'),
    timeIcon: require('./../assets/events_and_highlights/time.png'),
  },
};

export const getevents_highlights = () => {
  return events_highlight;
};
