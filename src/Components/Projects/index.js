import React from 'react';
import { View ,ScrollView,StyleSheet} from 'react-native';
import Cards from './MainContent/Card';
import SectionHeader from './../SectionHeader';
import Sponsors from './Sponsors';
import { Grid } from '@material-ui/core/';

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
      
     
     <Cards/>
      {/* <SectionHeader title="Partners" />
      <Sponsors /> */}
    </View>
  );
}


export default Projects;
