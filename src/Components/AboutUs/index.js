import React from 'react';
import SectionSubheader from '../SectionSubheader';
import content from '../../content/about_us.json';
import ImageContent from './../ImageContent';
import { MainContainer, Box, Content, Description } from './styles';
import OSCommunity from './Oscommunity';

function AboutUs() {
  const renderContent = () => {
    return (
      <Box>
        {content.sections.map((section, index) => {
          return (
            <Content key={index}>
              <SectionSubheader title={section.title} />
              {section.content.map((content, indx) => {
                return <Description key={indx}>{content.par}</Description>;
              })}
            </Content>
          );
        })}
      </Box>
    );
  };

  return (
    <MainContainer>
      <ImageContent
        image={require('../../assets/about.png')}
        imageSide="right"
        Children={renderContent}
      />
      <OSCommunity />
    </MainContainer>
  );
}

export default AboutUs;
