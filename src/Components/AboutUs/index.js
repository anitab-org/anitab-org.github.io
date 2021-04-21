import React from 'react';
import SectionSubheader from '../SectionSubheader';
import content from '../../content/about_us.json';
import ImageContent from './../ImageContent';
import { MainContainer, Box, Content, Description } from './styles';
import OSCommunity from './Oscommunity';
import Hyperlink from 'react-native-hyperlink';

function AboutUs() {
  const renderContent = () => {
    return (
      <Box>
        {content.sections.map((section, index) => {
          return (
            <Content key={index}>
              <SectionSubheader title={section.title} />
              {section.content.map((content, indx) => {
                return <Hyperlink linkStyle={ { color: '#2980b9'} } onPress={(url)=> window.open(url,'_blank')}>
                  <Description key={indx}>
                    {content.par}
                  </Description>
                </Hyperlink>;
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
