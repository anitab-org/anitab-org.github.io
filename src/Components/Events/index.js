import React from 'react';
import { View, Text } from 'react-native';
import GoogleCalendar from './GoogleCalendar';

function Events() {
  return (
    <View
      style={{
        width: '80%',
        alignItems: 'left',
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
    <Text h1 style={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "#013287"
      }}>EVENT CALENDAR</Text> 
      <Text style={{color: "#013287"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada massa nec porta interdum. 
      Vivamus porta mollis urna at congue. 
      Maecenas mollis, dolor ut auctor ultrices, diam ex dignissim ante, at sollicitudin risus risus id felis. 
      Suspendisse vel ante placerat, feugiat ligula pretium, dignissim est. 
      Donec vestibulum ullamcorper sapien et egestas. Ut eu aliquet leo.
      </Text>
      <GoogleCalendar/>
    </View>
  );
}

export default Events;