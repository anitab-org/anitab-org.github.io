import React from 'react';
import { View, Text, Image } from 'react-native';
import SectionHeader from './../SectionHeader';
import Sponsors from './Sponsors';


const styles = {
  root: {
    width: '80%',
    alignItems: 'left',
    paddingLeft: 16,
    paddingRight: 16,
  },
  box: {
    marginTop: '5%',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: { fontSize: '200%', color: '#416891' },
  text: { color: '#4c7db0', marginTop: '4%' },
  halfWidth: { width: '50%' },
  image: { height: '100%', width: '100%' }
}

const data = {
  title: 'Projects',
  body: `Anita Borg the famous computer scientist said,"We'll try to be a catalyst for development projects that include women at all levels - in the design and development process."
At AnitaB.org, we envision a future where the people who imagine and build technology mirror the people and societies for whom they build it. We connect, inspire, and guide women in computing, and organizations that view technology innovation as a strategic imperative.
Our team under the guidance of our admins is working together to make some amazing projects. Scroll down to know about it and if interested start contributing to them.
`
}

function Projects() {
  return (
    <View
      style={styles.root}
    >
      {/* <SectionHeader title="Partners" />
      <Sponsors /> */}
      <View
        style={styles.box}
      >
        <View
          style={styles.halfWidth}
        >
          <Text style={styles.title}>{data.title}</Text>

          <Text style={styles.text}>
            {data.body}
          </Text>
        </View>

        <View
          style={styles.halfWidth}
        >
          <Image
            style={styles.image}
            source={require('../../assets/project.svg')}
          />
        </View>

      </View>
    </View>
  );
}

export default Projects;
