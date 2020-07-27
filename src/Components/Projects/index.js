import React from 'react';
import { View ,ScrollView,StyleSheet} from 'react-native';
import Cards from './MainContent/Card';
import Upper from './MainContent/Upper';
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
      <Upper/>
      
      <Grid container spacing={2} style={{marginTop:"16px"}} >
      <Grid item md={4} spacing={2}>
      <Cards/>
      </Grid>
      <Grid item md={4} spacing={2}>
      <Cards/>
      </Grid>
      <Grid item md={4} spacing={2}>
      <Cards/>
      </Grid>
      <Grid item md={4} spacing={2}>
      <Cards/>
      </Grid>
      <Grid item md={4} spacing={2}>
      <Cards/>
      </Grid>
      <Grid item md={4} spacing={2}>
      <Cards/>
      </Grid>
      </Grid>
     
      {/* <SectionHeader title="Partners" />
      <Sponsors /> */}
    </View>
  );
}


export default Projects;
