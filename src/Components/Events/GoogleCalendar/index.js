import React from 'react';
import { View} from 'react-native';

function GoogleCalendar() {
  return (
    <View
      style={{
        width: '80%',
        alignItems: 'left',
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
        {/* Replace this iframe with the iframe of the google calendar associated with the google account according to which you want the schedule */}
        <iframe src="https://calendar.google.com/calendar/embed?src=er3gi62a5hip5jnk1f7r0al62s%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
            style={{border: "0", width: "100%", height:"500px", frameborder:"0", scrolling:"no"}}>
        </iframe>
    </View>
  );
}

export default GoogleCalendar;