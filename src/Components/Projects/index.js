import React from 'react';
import { View, Text, Image } from 'react-native';
import SectionHeader from './../SectionHeader';
import Sponsors from './Sponsors';

function Projects() {
  return (
    <View
      style={{
        width: '80%',
        alignItems: 'left',
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      {/* <SectionHeader title="Partners" />
      <Sponsors /> */}
      <View
        style={{
          marginTop: '1.2rem',
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <View 
        style={{
          width: '500px'
        }}
        >
          <Text
            style={{ fontSize: '2.2rem', color: '#416891'}}
          >Projects</Text>

          <Text
            style={{ color: '#4c7db0', marginTop: '.5rem'}}
          >
          At AnitaB.org, we envision a future where the people who imagine and build technology 
          mirror the people and societies for whom they build it. We connect, inspire, and guide 
          women in computing, and organizations that view technology innovation as a strategic 
          imperative.
          </Text>

          <Text>
            
          </Text>
        </View>

        <View 
        style={{width: '50%'}}
        >
          <Image
            style={{ height: 300, width: '100%' }}
            source={require('../../assets/project.svg')}
          />
        </View>

      </View>
    </View>
  );
}

export default Projects;
