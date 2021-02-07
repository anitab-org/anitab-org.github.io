import React from 'react';
import ImageContent from './../ImageContent';
import SectionHeader from './../SectionHeader';
import { getEvents } from './../../content/our_events';
import { Box, Content, Description } from './styles';


function OurEvents() {
  const content = getEvents();
  const renderContent = (index, section) => {
    return (
      <Content key={index}>
        <SectionHeader title={section.title} />
        {section.content.map((content, indx) => {
          return <Description key={indx}>{content.par}</Description>;
        })}
      </Content>
    );
  };

  return (
    <Box>
    {content.sections.map((section, index) => {
      return (
        <ImageContent key={index}
          image={section.image.source}
          imageSide={index % 2 === 0 ? 'right' : 'left'}
          Children={() => renderContent(index, section)}
        />
      );
    })}
    </Box>

  );
}
export default OurEvents;
