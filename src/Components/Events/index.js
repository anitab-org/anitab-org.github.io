
import React, {useState} from 'react';	
import {View , StyleSheet, Text} from 'react-native';
import EventCard from './Cards';
import {getevents_highlights} from './../../content/events_and_highlights';
import SectionSubheader from './../SectionSubheader';
import GoogleCalendar from './GoogleCalendar';	
import content from '../../content/events_calendar.json';	
import { Box, MainContainer, Content, Description, List } from './style';	
import OurEvents from '../OurEvents/index';

const events_highlight = getevents_highlights();

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'left',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 32,
    },
    description: {
        flex: 1,
        marginTop: 16,
        paddingLeft: 16,
        fontSize: 18,
        flexGrow: 1,
        fontWeight: 150,
        color: '#103B81',
        textAlign: 'left',
    },
    cardContainer : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 32,
    },
});

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

  const listTimezones = timezones.map(function(zone,index){
    return (
    <List key={index} onClick={() => handler(zone.link) }>
        {zone.name}
    </List>
    )
  });

  const renderCalendar = () => {
    return(
            
         <View style={styles.container} >
            <SectionSubheader
                title={events_highlight.sections[0].title}
            />
            {events_highlight.sections[0].content.map((detail,index) => {   
                return <Text style={styles.description} key={index}>{detail.par}</Text>;
            })}
            <View
              style={styles.cardContainer}
            >
                {events_highlight.sections[1].events.map((event_detail,index) => (
                    <EventCard
                        key={event_detail.title}
                        props={event_detail}
                        links={events_highlight.icon_links}
                        backgroundColor="#e7edfd"
                        padding={16}
                    />
                ))}
            </View>

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
         </View>   
    )
  }

  return (
    <MainContainer>
      {renderCalendar()}
    </MainContainer>
  );
}

export default Events;
