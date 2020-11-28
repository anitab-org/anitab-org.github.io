

import React from 'react';
import ImageContent from './../ImageContent';
import SectionHeader from '../SectionHeader';
import SectionSubheader from '../SectionSubheader';
import { getcontributeIntro } from '../../content/contributeintro';
import { Box, Content, Description } from './style';
import ContributionSection from '../Home/contribution/ContributionSection';

function Contribute() {
  const content = getcontributeIntro();
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
      <SectionHeader title="New to open source?" />
      {content.sections.map((section, index) => {
        return (
            
          <ImageContent
            image={section.image.source}
            imageSide={index % 2 === 0 ? 'right' : 'left'}
            Children={() => renderContent(index, section)}
          />
        );
      })}
      
    </Box>
  );
}
export default Contribute;

