import React from 'react';
import { MainContainer } from '../style';

function GoogleCalendar() {
  return (
    <MainContainer>
        {/* Replace this iframe with the iframe of the google calendar associated with the google account according to which you want the schedule */}
        <iframe src="https://calendar.google.com/calendar/embed?src=er3gi62a5hip5jnk1f7r0al62s%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
          title="Calendar" style={{border: "0", width: "100%", height:"500px", frameborder:"0", scrolling:"no"}}>
        </iframe>
    </MainContainer>
  );
}

export default GoogleCalendar; 