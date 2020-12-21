import React from 'react';
import { MainContainer } from '../style';

function GoogleCalendar({timezone}) {
  return (
    <MainContainer>
        <iframe src={`https://calendar.google.com/calendar/u/0/embed?src=sh10tv3mtfve62somg9nngp9tg@group.calendar.google.com${timezone}`}
          title="Calendar" style={{border: "0", width: "100%", height:"500px", frameborder:"0", scrolling:"no"}}>
        </iframe>
    </MainContainer>
  );
}

export default GoogleCalendar;