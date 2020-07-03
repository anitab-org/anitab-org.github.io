import React from 'react';
import { View } from 'react-native';
import SectionHeader from './../SectionHeader';
import Sponsors from './Sponsors';
import Cards from './MainSection/cards/index.js';
import Upper from './MainSection/upper/index.js';

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
      <Upper/>
      <Cards/>

      {/* <SectionHeader title="Partners" />
      <Sponsors /> */}
    </View>
  );
}

export default Projects;
