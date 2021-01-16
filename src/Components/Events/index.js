import React, {useState} from 'react';
import SectionSubheader from '../SectionSubheader';
import GoogleCalendar from './GoogleCalendar';
import content from '../../content/events_calendar.json';
import { Box, MainContainer, Content, Description, List } from './style';
import OurEvents from '../OurEvents/index';

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

  const listTimezones = timezones.map(function(zone){
    return (
    <List onClick={() => handler(zone.link) }>
        {zone.name}
    </List>
    )
  });

  const renderCalendar = () => {
    return(
      <Box>
      <OurEvents />
        {
          content.sections.map((section, index) => {
            return(
              <Content key={index}>
                <SectionSubheader title={section.title}/>
                <Description>{section.content} <br/> {listTimezones}</Description>
                <GoogleCalendar timezone = {timezone}/>
              </Content>
            )
          })
        }
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