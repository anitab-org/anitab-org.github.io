import React from 'react';
import { TouchableHighlight, Linking } from 'react-native';
import ImageContent from './../ImageContent';
import SectionSubheader from './../SectionSubheader';
import { getHome } from './../../content/home';
import { Box, Content, Description, IconContainer, Icon } from './styles';
import ContributionSection from './contribution/ContributionSection';

function Home() {
  const content = getHome();
  const renderContent = (index, section) => {
    return (
      <Content key={index}>
        <SectionSubheader title={section.title} />
        {section.content.map((content, indx) => {
          return <Description key={indx}>{content.par}</Description>;
        })}
      </Content>
    );
  };

  return (
    <Box>
      <ImageContent
        image={content.introduction.image.source}
        imageSide='right'
        Children={() => (
          <Content>
            <SectionSubheader title={content.introduction.title} />
            <IconContainer>
              <TouchableHighlight onPress={() => Linking.openURL('https://medium.com/anitab-org-open-source')}>
                <Icon source={require('../../assets/medium.png')} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => Linking.openURL('https://anitab-org.zulipchat.com/#')}>
                <Icon source={require('../../assets/zulip.png')} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => Linking.openURL('https://github.com/anitab-org')}>
                <Icon source={require('../../assets/github.png')} />
              </TouchableHighlight>
            </IconContainer>
            <Description>{content.introduction.content.par}</Description>
          </Content>
        )}
      />
      
      {content.sections.map((section, index) => {
        return (
          <ImageContent
            image={section.image.source}
            imageSide={index % 2 ? 'right' : 'left'}
            Children={() => renderContent(index, section)}
          />
        );
      })}
      <ContributionSection />
    </Box>
  );
}
export default Home;
