import React from 'react';
import ImageContent from './../ImageContent';
import SectionHeader from './../SectionHeader';
import SectionSubheader from './../SectionSubheader';
import { getHome } from './../../content/home';
import { Box, Content, Description } from './styles';
import ContributionSection from './contribution/ContributionSection';
import HTMLReactParser from 'html-react-parser';

function Home() {
  const content = getHome();
  const renderContent = (index, section) => {
    return (
      <Content key={index}>
        <SectionSubheader title={section.title} />
        {section.content.map((content, indx) => {
          return (
            <Description key={indx}>{HTMLReactParser(content.par)}</Description>
          );
        })}
      </Content>
    );
  };

  return (
    <Box>
      <SectionHeader title="AnitaB.org Open Source" />
      {content.sections.map((section, index) => {
        return (
          <ImageContent
            key={index}
            image={section.image.source}
            imageSide={index % 2 === 0 ? 'right' : 'left'}
            Children={() => renderContent(index, section)}
          />
        );
      })}
      <ContributionSection />
    </Box>
  );
}
export default Home;
