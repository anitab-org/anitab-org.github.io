import React from 'react';
import SectionHeader from '../SectionHeader';
import content from '../../content/contributeIntro';
import ImageContent from './../ImageContent';
import { MainContainer, Box, Content, Description } from './style';
import Hyperlink from 'react-native-hyperlink';
import { ThemeContext } from '../../Context/ThemeContext';
import HTMLReactParser from 'html-react-parser';

function Contribute() {
  const { colors } = React.useContext(ThemeContext);
  const renderContent = () => {
    return (
      <Box>
        {content.sections.map((section, index) => {
          return (
            <Content key={index}>
              <SectionHeader title={section.title} />
              {section.content.map((content, index) => {
                return (
                  <Hyperlink
                    linkStyle={{ color: '#2980b9' }}
                    onPress={(url) => window.open(url, '_blank')}
                  >
                    <Description key={index} style={{ color: colors.text }}>
                      {HTMLReactParser(content.par)}
                    </Description>
                  </Hyperlink>
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
        image={require('../../assets/Frame 1.png')}
        imageSide="right"
        Children={renderContent}
      />
    </MainContainer>
  );
}

export default Contribute;
