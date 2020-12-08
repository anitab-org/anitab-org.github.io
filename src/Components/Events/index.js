import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GoogleCalendar from './GoogleCalendar';

function Events() {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.heading}>EVENT CALENDAR</Text> 
      <Text style={styles.data}>
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

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: 'left',
    paddingLeft: 16,
    paddingRight: 16,
  },
  heading:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#013287"
  },
  data:{
    color: "#013287"
  }
});

export default Events;