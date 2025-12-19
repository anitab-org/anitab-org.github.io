import React from 'react';
import SectionSubheader from '../SectionSubheader';
import content from '../../content/about_us.json';
import ImageContent from './../ImageContent';
import { MainContainer, Box, Content, Description } from './styles';
import OSCommunity from './Oscommunity';
import Link from 'react-native-hyperlink';
import { ThemeContext } from '../../Context/ThemeContext';

function AboutUs() {
  const { colors } = React.useContext(ThemeContext);
  const renderContent = () => {
    return (
      <Box>
        {content.sections.map((section, index) => {
          return (
            <Content key={index}>
              <SectionSubheader title={section.title} />
              {section.content.map((content, indx) => {
                return (
                  <Link
                    linkStyle={{ color: '#2980b9' }}
                    onPress={(url) => window.open(url, '_blank')}
                  >
                    <Description key={indx} style={{ color: colors.text }}>
                      {content.par}
                    </Description>
                  </Link>
                );
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
