import React from 'react';
import SectionSubheader from '../SectionSubheader';
import GoogleCalendar from './GoogleCalendar';
import { Box, MainContainer, Content, Description } from './style';

function Events() {

  const renderCalendar = () => {
    return(
      <Box>
        <Content>
          <SectionSubheader title="Event Calendar"/>
          <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada massa nec porta interdum. 
          Vivamus porta mollis urna at congue. 
          Maecenas mollis, dolor ut auctor ultrices, diam ex dignissim ante, at sollicitudin risus risus id felis. 
          Suspendisse vel ante placerat, feugiat ligula pretium, dignissim est. 
          Donec vestibulum ullamcorper sapien et egestas. Ut eu aliquet leo.
          </Description>
          <GoogleCalendar/>
        </Content>
      </Box>
    )
  }

  return (  
    <MainContainer>
      {renderCalendar()}
    </MainContainer>
  );
}

export default Events;