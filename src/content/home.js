const home = {
  sections: [
    {
      title: 'Getting Started',
      image: {
        source: require('./../assets/landing/getting-started.png'),
      },
      content: [
        {
          par: 'The AnitaB.org community is a fusion of rich values and diverse cultures consisting of members all across the seven oceans with a fearless mission of inspiring, motivating and helping women with their involvement in technical fields and has made a significant impact with regards to contribution of women in tech.\nThe other values of the organization include Accountable, Agile, Curious, Courageous, Diversity, Equity, Inclusion(DEI), encourage everyone to follow the org’s contributing guidelines and obviously passion for open source. ',
        },
        {
          par: "Zulip is our main communication platform and you should join us there and first give a short introduction about yourself in the #newcomers stream. Zulip consists of various streams like Documentation, Coding, Design, etc and the one that fascinates you the most is the one you should start contributing in.\nThe #announcements stream will be displaying all the important announcements. Tag our community members if there's any confusion or ask for proper guidance from them regarding your contributions to the community.",
        },
        {
          par: "Our code of conduct is simple- 'Be nice, Be respectful' which is the one of the many reasons the community coexists in harmony. The members should contribute actively keeping the policies of being respectful to everyone and refraining from conflicts, unruly behaviour and speech. Anyone who wishes to join the community is expected to follow these guidelines.\nIf you are subject to or witness unacceptable behavior, or have any other concerns, please notify a community organizer or admins as soon as possible.",
        },
      ],
    },
    {
      title: 'Ways To Contribute',
      image: {
        source: require('./../assets/landing/landing.png'),
      },
      content: [
        {
          par:
            'You can start contributing to our various open source projects by- \n\n1) <a href = "https://github.com/anitab-org/anitab-org.github.io/issues" target="_blank">Creating issues on Github</a> regarding the project \n2) Debugging the issues \n3) Creating pull requests, testing pull requests \n4) Create mockups for new applications or redesign the current features \n5) Research about UI/UX improvements and accessibility features. \n6) Create app walk through with documents or videos, UI testing once the PR is submitted for the UI issue',
        },
        {
          par:
            'Each active repository has a stream to direct questions. \nIssues labeled as <a href = "https://github.com/anitab-org/anitab-org.github.io/issues?q=is%3Aopen+is%3Aissue+label%3A%22First+Timers+Only%22" target="_blank">First Timers Only</a> are meant for contributors who have not contributed to the project yet. Please choose other issues to contribute to, if you have already contributed to these type of issues. \nMake sure to follow the <a href = "https://github.com/anitab-org/mentorship-android/wiki/Commit-Message-Style-Guide" target="_blank">Commit Message Style Guide</a> when submitting PRs which will require review by at least one maintainer to be merged to the main code.',
        },
      ],
    },
    {
      title: 'Our Projects',
      image: {
        source: require('./../assets/landing/getting-started.png'),
      },
      content: [
        {
          par: "First and foremost, choose a programming language of your choice. Once you are done with selecting a programming language search for a project. Here's a list of our open source projects - ",
        },
        {
          par: '1) Mentorship System \n\nMentorship System is an application that matches women in tech to mentor each other, on career development, through relations during a certain period of time. \nIt is an open source project proposed for Google Summer of Code 2018 with AnitaB.org Open Source, an idea that consists of a mobile application that matches women to help and support both parties. One is the mentor that will be a support/accountability buddy and or give advice to a woman that wants mentorship, for a period of time established by both parties. This would not focus only on students, this would target women from any age, background, work in tech experience, and so on. This project uses Kotlin for frontend and Python for backend. \nFlutter and iOS versions are also available.',
        },
        {
          par: '2) The Volunteer Management System (VMS) \n\nThe Volunteer Management System (VMS) will be useful for volunteer coordinators, volunteer sign-up,tracking hours, and reporting. This project is currently under development same as the mentorship application project. The Volunteer Management System will be developed in phases. The initial implementation will track volunteers’ contact information, enable administrators to track volunteer hours, and allow reporting of useful information. This project uses the Django web framework and Python. ',
        },
        {
          par: '3) PowerUp Android \n\nPowerUp is a female empowerment educational mobile game app that will allow young girls to learn about reproductive health and self-esteem by navigating the life of their avatar. This project uses Java. Android and iOS versions are available.',
        },
        {
          par: '4) AnitaB-org.github.io \n\nAnitaB.org Open Source web gathering all information about current open source projects, running programs and events as well as all necessary contribution information.',
        },
        {
          par: '5) Bridge-in-tech \n\nBridge-In-Tech is an application inspired by the existing AnitaB.org Mentorship System. It encourages organizations to collaborate with the mentors and mentees on mentoring programs. Through Bridge-In-Tech,an organization can offer a mentorship program to a mentor and a mentee that is customised to meet the needed skills set within its organisation while providing a safety and supportive environment for these mentor/mentee to work in. This project was proposed as an original project of Google Summer of Code 2020. The front end of this application will be a Web application using (tech stack tba).',
        },
        {
          par: 'And more interesting and informative projects in future!',
        },
      ],
    },
    {
      title: 'Open Source Programs ',
      image: {
        source: require('./../assets/landing/landing.png'),
      },
      content: [
        {
          par: "1) Google Summer of Code \n\nAnitaB.org has been actively participating in the Google Summer of Code in the years 2016, 2017, 2018, 2020 and is one of the most successful organizations since the very beginning. Here's what participants shared about their experience with AnitaB.org -\nMohammad Murad, former AnitaB.org GSoC mentor in his Medium blog says- AnitaB.org is very different, along with writing coding equal importance is given to interacting with the community. The community also helps in personal development and personal growth. \nIsabel Costa, GSoC 2018 participant in her Medium blog says- I got to meet incredible people from the AnitaB.org community. I grew personally and professionally by sharing and learning from other’s perspectives. Being recognized for my work as the Most Outstanding Student by Systers made me very proud of my achievements. This was truly an awesome experience. ",
        },
        {
          par: "2) Google Code In \n\nAnitaB.org has been actively participating in the Google Code In in the years 2014, 2015, 2016, 2017, 2019 and is one of the most successful organizations since the very beginning. Here's what participants shared about their experience with AnitaB.org - \nVatsal Kulshrestha, former GCI 2017 participant in his Medium blog says- AnitaB.org has been a true personification of the famous quote by Einstein- ‘The only source of knowledge is EXPERIENCE’ ",
        },
      ],
    },
  ],
};

export const getHome = () => {
  return home;
};
