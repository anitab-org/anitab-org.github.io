import React, {useState} from 'react';
import SectionSubheader from '../SectionSubheader';
import GoogleCalendar from './GoogleCalendar';
import { Box, MainContainer, Content, Description, List } from './style';

const timezones = [
  {
    id: 1,
    name: "PST",
    link: "&ctz=America/Los_Angeles"
  },
  {
    id: 2,
    name: "EST",
    link: "&ctz=America/New_York"
  },
  {
    id: 3,
    name: "GMT",
    link: "&ctz=GMT"
  },
  {
    id: 4,
    name: "WAT",
    link: "&ctz=Africa/Lagos"
  },
  {
    id: 5,
    name: "IST",
    link: "&ctz=Asia/Colombo"
  },
  {
    id: 6,
    name: "AEDT",
    link: "&ctz=Australia/Sydney"
  }
]

function Events() {
  const [timezone, setTimezone] = useState("")
  
  const handler = (link) => {
    setTimezone(link)
  }

  var listTimezones = timezones.map(function(zone){
    return (
    <List onClick={() => handler(zone.link) }>
        {zone.name}
    </List>
    )
  });

  const renderCalendar = () => {
    return(
      <Box>
        <Content>
          <SectionSubheader title="Event Calendar"/>
          <Description>
          We host multiple open sessions to the community where members of the community can discuss concerns about the community, ask questions, discuss projects, etc. These sessions are open to anyone and are usually conducted via Zoom. These are audio-only calls, so no video is required.
          You can see our calendar in different timezones:<br/> {listTimezones}
          </Description>
          <GoogleCalendar timezone = {timezone}/>
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