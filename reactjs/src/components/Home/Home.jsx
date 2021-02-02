import React from "react";
import Started from "../../assets/landing/getting-started.png";
import Landing from "../../assets/landing/landing.png";
import Code from "../../assets/contribution/code.png";
import Documentation from "../../assets/contribution/documentation_training.png";
import Design from "../../assets/contribution/design_community.png";
import Testing from "../../assets/contribution/testing.png";
import Research from "../../assets/contribution/research_outreach.png";
import Management from "../../assets/contribution/project_management.png";

function Home() {
  return (
    <React.Fragment>
      <div className="container-fluid font-blue font-regular mx-auto">
        <h1 className="font-bold font-32 mt-4">AnitaB.org Open Source</h1>
        <div className="row my-5">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 font-18 font-regular">
            <h2 className="font-demi font-24 mb-4">Getting Started</h2>
            <p>
              The AnitaB.org community is a fusion of rich values and diverse
              cultures consisting of members all across the seven oceans with a
              fearless mission of inspiring, motivating and helping women with
              their involvement in technical fields and has made a significant
              impact with regards to contribution of women in tech. The other
              values of the organization include Accountable, Agile, Curious,
              Courageous, Diversity, Equity, Inclusion(DEI), encourage everyone
              to follow the org’s contributing guidelines and obviously passion
              for open source.
            </p>
            <p>
              Zulip is our main communication platform and you should join us
              there and first give a short introduction about yourself in the
              #newcomers stream. Zulip consists of various streams like
              Documentation, Coding, Design, etc and the one that fascinates you
              the most is the one you should start contributing in. The
              #announcements stream will be displaying all the important
              announcements. Tag our community members if there's any confusion
              or ask for proper guidance from them regarding your contributions
              to the community.
            </p>
            <p>
              Our code of conduct is simple- 'Be nice, Be respectful' which is
              the one of the many reasons the community coexists in harmony. The
              members should contribute actively keeping the policies of being
              repectful to everyone and refrainging from conflicts, unruly
              behaviour and speech. Anyone who wishes to join the community is
              expected to follow these guidelines. If you are subject to or
              witness unacceptable behavior, or have any other concerns, please
              notify a community organizer or adminas soon as possible.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
            <img src={Started} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <img src={Landing} alt="" className="img-fluid p-5" />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12 font-18 font-regular">
            <h2 className="font-demi font-24 mb-4">Ways to Contribute</h2>
            You can start contributing to our various open source projects by-
            <ol type="1">
              <li>Creating issues on Github regarding the project</li>
              <li>Debugging the issues</li>
              <li>Creating pull requests, testing pull requests</li>
              <li>
                Create mockups for new applications or redesign the current
                features
              </li>
              <li>
                Research about UI/UX improvements and accessibilty features.
              </li>
              <li>
                Create app walkthroughs with documents or videos, UI testing
                once the PR is submitted for the UI issue.
              </li>
            </ol>
            <p>
              Each active repository has a stream to direct questions. Issues
              labeled as 'First Timers Only' are meant for contributors who have
              not contributed to the project yet. Please choose other issues to
              contribute to, if you have already contributed to these type of
              issues. Make sure to follow the Commit Message Style Guide when
              submitting PRs which will require review by atleast one maintainer
              to be merged to the main code.
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 font-18 font-regular">
            <h2 className="font-demi font-24 mb-4">Our projects</h2>
            First and foremost, choose a programming language of your choice.
            Once you are done with selecting a programming language search for a
            project. Here's a list of our open source projects -
            <ol type="1">
              <li className="font-medium">
                Mentorship System
                <p className="font-regular">
                  Mentorship System is an application that matches women in tech
                  to mentor each other, on career development, through relations
                  during a certain period of time. It is an open source project
                  proposed for Google Summer of Code 2018 with AnitaB.org Open
                  Source, an idea that consists of a mobile application that
                  matches women to help and support both parties. One is the
                  mentor that will be a support/accountability buddy and or give
                  advice to a woman that wants mentorship, for a period of time
                  established by both parties. This would not focus only on
                  students, this would target women from any age, background,
                  work in tech experience, and so on. This project uses Kotlin
                  for frontend and Python for backend. Flutter and iOS versions
                  are also available.
                </p>
              </li>
              <li className="font-medium">
                The Volunteer Management System (VMS)
                <p className="font-regular">
                  The Volunteer Management System (VMS) will be useful for
                  volunteer coordinators, volunteer sign-up,tracking hours, and
                  reporting. This project is currently under development same as
                  the mentorship application project. The Volunteer Management
                  System will be developed in phases. The initial implementation
                  will track volunteers’ contact information, enable
                  administrators to track volunteer hours, and allow reporting
                  of useful information. This project uses the Django web
                  framework and Python.
                </p>
              </li>
              <li className="font-medium">
                PowerUp Android
                <p className="font-regular">
                  PowerUp is a female empowerment educational mobile game app
                  that will allow young girls to learn about reproductive health
                  and self-esteem by navigating the life of their avatar. This
                  project uses Java. Android and iOS versions are available.
                </p>
              </li>
              <li className="font-medium">
                AnitaB-org.github.io
                <p className="font-regular">
                  AnitaB.org Open Source web gathering all informations about
                  current open source projects, running programs and events as
                  well as all necessary contribution informations.
                </p>
              </li>
              <li className="font-medium">
                Bridge-in-tech
                <p className="font-regular">
                  Bridge-In-Tech is an application inspired by the existing
                  AnitaB.org Mentorship System. It encourages organizations to
                  collaborate with the mentors and mentees on mentoring
                  programs. Through Bridge-In-Tech,an organization can offer a
                  mentorship program to a mentor and a mentee that is customised
                  to meet the needed skills set within its organisation while
                  providing a safety and supportive environment for these
                  mentor/mentee to work in. This project was proposed as an
                  original project of Google Summer of Code 2020. The frontend
                  of this application will be a Web application using (tech
                  stack tba).
                </p>
              </li>
            </ol>
            <p>And more interesting and informative projects in future!</p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
            <img src={Started} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <img src={Landing} alt="" className="img-fluid p-5" />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12 font-18 font-regular">
            <h2 className="font-demi font-24 mb-4">Open Source Programs</h2>
            You can start contributing to our various open source projects by-
            <ol type="1">
              <li className="font-medium">
                Google Summer of Code
                <p className="font-regular">
                  AnitaB.org has been actively participating in the Google
                  Summer of Code in the years 2016, 2017, 2018, 2020 and is one
                  of the most successful organizations since the very beginning.
                  Here's what participants shared about their experience with
                  AnitaB.org - Mohammad Murad, former AnitaB.org GSoC mentor in
                  his Medium blog says- AnitaB.org is very different, along with
                  writing coding equal importance is given to interacting with
                  the community. The community also helps in personal
                  development and personal growth. Isabel Costa, GSoC 2018
                  participant in her Medium blog says- I got to meet incredible
                  people from the AnitaB.org community. I grew personally and
                  professionally by sharing and learning from other’s
                  perspectives. Being recognized for my work as the Most
                  Outstanding Student by Systers made me very proud of my
                  achievements. This was truly an awesome experience.
                </p>
              </li>
              <li className="font-medium">
                Google Code In
                <p className="font-regular">
                  AnitaB.org has been actively participating in the Google Code
                  In in the years 2014, 2015, 2016, 2017, 2019 and is one of the
                  most successful organizations since the very beginning. Here's
                  what participants shared about their experience with
                  AnitaB.org - Vatsal Kulshrestha, former GCI 2017 participant
                  in his Medium blog says- AnitaB.org has been a true
                  personification of the famous quote by Einstein- ‘The only
                  source of knowledge is EXPERIENCE’
                </p>
              </li>
            </ol>
          </div>
        </div>
        <h2 className="font-demi font-24 mt-5">Interested in Contributing?</h2>
        <p className="mb-4 font-18">
          You can start contributing through one or more fields of your choice
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4 text-center">
            <img src={Code} alt="" className="img-fluid px-5" />
            <div className="font-medium font-18"> Code</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4 text-center">
            <img src={Documentation} alt="" className="img-fluid px-5" />
            <div className="font-medium font-18"> Documentation Training</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4 text-center">
            <img src={Design} alt="" className="img-fluid px-5" />
            <div className="font-medium font-18"> Design</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4 text-center">
            <img src={Testing} alt="" className="img-fluid px-5" />
            <div className="font-medium font-18"> Testing</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4 text-center">
            <img src={Research} alt="" className="img-fluid px-5" />
            <div className="font-medium font-18"> Outreach/ Research</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4 text-center">
            <img src={Management} alt="" className="img-fluid px-5" />
            <div className="font-medium font-18"> Project Management</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
