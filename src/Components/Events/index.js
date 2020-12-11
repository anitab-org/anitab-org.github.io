import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SectionSubheader from '../SectionSubheader';
import GoogleCalendar from './GoogleCalendar';

function Events() {
  return (  
      <View style={styles.container}>
      <SectionSubheader title="Event Calendar"/>
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
  data:{
    color: '#103B81',
    paddingLeft: 16,
    paddingBottom: 25,
    paddingTop: 16
  }
});

export default Events;