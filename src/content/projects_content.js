const projects = {
  sections: [
    {
      title: 'Projects',
      image: {
        source: require('./../assets/projects/our-projects.png'),
      },
      content: [
        {
          par:
            'Our open source projects are oriented to help not only women in tech but also increase diversity and inclusion in STEM. We have multiple projects on our GitHub account and we are trying to keep up to date latest technologies and modern programming and scripting languages.',
        },
      ],
      cards: [
        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'Mentorship Android',
          description:
            'Android client for Mentorship System - an application that allows women in tech to mentor each other, on career development topics, through 1:1 relations for a certain period.',
          labels: [
            { title: 'kotlin', color: '#FFF684' },
            { title: 'mvvm', color: '#3EBEA1' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/222534-mentorship-system/topic/Android',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/mentorship-android',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/mentorship-android/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'Mentorship Backend',
          description:
            'Backend REST API for Mentorship System - an application that allows women in tech to mentor each other, on career development topics, through 1:1 relations for a certain period.',
          labels: [
            { title: 'flask', color: '#F8972B' },
            { title: 'python', color: '#C1D72E' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/222534-mentorship-system/topic/mentorship-backend',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/mentorship-backend',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/mentorship-backend/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'Mentorship Flutter',
          description:
            "Cross-platform client app for the Mentorship System - an application that matches women in tech to mentor each other, on career development, through 1:1 relations during a certain period of time. It's written in the Flutter framework.",
          labels: [
            { title: 'dart', color: '#F5BED8' },
            { title: 'flutter', color: '#C1D72E' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/222534-mentorship-system/topic/mentorship-flutter',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/mentorship-flutter',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/mentorship-flutter/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'Mentorship iOS',
          description:
            'iOS application for Mentorship System - an application that matches women in tech to mentor each other, on career development, through 1:1 relations during a certain period of time.',
          labels: [
            { title: 'swiftUI', color: '#F8972B' },
            { title: 'mvvm', color: '#3EBEA1' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/222534-mentorship-system/topic/iOS',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/mentorship-ios',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/mentorship-ios/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'Portal',
          description:
            'AnitaB.org Portal is for AnitaB.org communities to post and share information within and with other communities.',
          labels: [
            { title: 'django', color: '#51B9EA' },
            { title: 'python', color: '#C1D72E' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/222540-portal',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/portal',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/portal/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'VMS',
          description:
            'AnitaB.org has many volunteers that offer their skills, time, and commitment to our vision and projects. The Volunteer Management System (VMS) will be useful for volunteer coordinators, volunteer sign-up, tracking hours, and reporting. This project uses the Django web framework and Python.',
          labels: [
            { title: 'django', color: '#51B9EA' },
            { title: 'python', color: '#C1D72E' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url: 'https://anitab-org.zulipchat.com/#narrow/stream/222539-vms',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/vms',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/vms/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'AnitaB.org Open Source Website',
          description:
            'AnitaB.org Open Source web gathering all informations about current open source projects, running programs and events as well as all necessary contribution informations.',
          labels: [
            { title: 'react-native', color: '#EF4035' },
            { title: 'javascript', color: '#F9D507' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/235478-anitab-org.2Egithub.2Eio',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/anitab-org.github.io',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/anitab-org.github.io/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'Bridge-In-Tech Web',
          description: "Web Application for Bridge-In-Tech - an application that encourages active collaboration between organization, mentor and mentee, by allowing organization to offer a mentoring program where mentor and mentee can work on. The mentoring program can be customised to meet the needed skills set that the organization is looking for.",
          labels: [
            { title: 'react js', color: '#BD6AAA' },
            { title: 'javascript', color: '#F9D507' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/224798-gsoc/topic/BridgeInTech.20-.20Maya',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/bridge-in-tech-web',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/bridge-in-tech-web/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'Bridge-In-Tech Backend',
          description: "Backend REST API for Bridge-In-Tech - an application that encourages active collaboration between organization, mentor and mentee, by allowing organization to offer a mentoring program where mentor and mentee can work on. The mentoring program can be customised to meet the needed skills set that the organization is looking for.",
            labels: [
            { title: 'flask', color: '#F8972B' },
            { title: 'python', color: '#C1D72E' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/224798-gsoc/topic/BridgeInTech.20-.20Maya',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/bridge-in-tech-backend',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/bridge-in-tech-backend/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'Open Source Programs Web',
          description:
            'Frontend of Open Source Programs (OSP) - an application that simplifies the processing and selection procedure of Open Source Programs of AnitaB.org Open Source or other third-party programs.',
          labels: [
            { title: 'react js', color: '#BD6AAA' },
            { title: 'javascript', color: '#F9D507' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/224798-gsoc/topic/Open.20Source.20Programs.20-.20Bismita.20Guha',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/open-source-programs-web',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/open-source-programs-web/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'Open Source Programs Backend',
          description:
            'Backend of Open Source Programs (OSP) - an application that simplifies the processing and selection procedure of Open Source Programs of AnitaB.org Open Source or other third-party programs.',
          labels: [
            { title: 'django', color: '#51B9EA' },
            { title: 'python', color: '#C1D72E' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/224798-gsoc/topic/Open.20Source.20Programs.20-.20Bismita.20Guha',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/open-source-programs-backend',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/open-source-programs-backend/contributors',
        },

        {
          image: {
            source: require('./../assets/placeholder.png'),
          },
          title: 'Stem Diverse TV',
          description:
            'STEM Diverse TV is an app which provides inspiring, motivating, supportive, educational and informative videos to promote and increase diversity in STEM.',
          labels: [
            { title: 'flask', color: '#F8972B' },
            { title: 'python', color: '#C1D72E' },
          ],
          badges: [
            {
              title: 'zulip',
              source: require('./../assets/zulip.png'),
              url:
                'https://anitab-org.zulipchat.com/#narrow/stream/225705-STEM-diverse-tv',
            },
            {
              title: 'github',
              source: require('./../assets/github.png'),
              url: 'https://github.com/anitab-org/stem-diverse-tv',
            },
          ],
          contributors_url:
            'https://api.github.com/repos/anitab-org/stem-diverse-tv/contributors',
        },
      ],
    },
  ],
};

export const getProjects = () => {
  return projects;
};

