import React from 'react';
import { View } from 'react-native';
// import SectionHeader from './../SectionHeader';
// import Sponsors from './Sponsors';
import ImageTextSection from './../ImageTextSection';
import { getProjects } from './../../content/projects_content';
import ProjectCard from './ProjectCard';
import { ThemeContext } from '../../Context/ThemeContext';

function Projects(props) {
  const { theme } = React.useContext(ThemeContext);
  const projects = getProjects();
  return (
    <View
      style={{
        width: '80%',
        alignItems: 'left',
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      {projects.sections.map((project, index) => (
        <View key={project.title + index}>
          <ImageTextSection
            title={project?.title}
            content={project?.content}
            image={
              theme === 'dark' ? project?.image?.dark : project?.image?.light
            }
            imageSide="right"
          />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {project.cards.map((card) => (
              <ProjectCard
                key={card.title}
                props={card}
                backgroundColor={theme === 'dark' ? '#1d1d1dff' : '#e7edfd'}
                padding={12}
              />
            ))}
          </View>
        </View>
      ))}
      {/* 
      <SectionHeader title="Partners" />
      <Sponsors /> */}
    </View>
  );
}

export default Projects;
