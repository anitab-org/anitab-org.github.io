import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import content from './AboutContent/index.json';
import SectionHeader from '../SectionHeader';

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions * 9)/16);
let imageWidth = dimensions.width;

function About(){
  return(
    <View style={styles.container}>
      <View style={styles.item}>

        <SectionHeader title="OUR MISSION"/>
        <Text style={styles.content}>
          {content.aboutpage.mission}
        </Text>

        <SectionHeader title="OUR HISTORY"/>
        <Text style={styles.content}>
          {content.aboutpage.mission}
        <TouchableHighlight
          style={styles.link}
          underlayColor='transparent'
          accessible={true}
          onPress={() => Linking.openURL('https://anitab.org/about-us/mission-and-history/')}
        >
         <Text>Learn More ></Text>
        </TouchableHighlight>
        </Text>

        <SectionHeader title="ABOUT ANITA BORG"/>
        <Text style={styles.content}>
          {content.aboutpage.about}

        <TouchableHighlight
          style={styles.link}
          underlayColor='transparent'
          accessible={true}
          onPress={() => Linking.openURL('https://anitab.org/about-us/about-anita-borg/')}
        >
         <Text>Learn More ></Text>
        </TouchableHighlight>
        </Text>

        <SectionHeader title="INSIGHTS"/>
        <Text style={styles.content}>
          <Text style={styles.gridWrap}>
            10+ Projects 
            <Image
                style={styles.grid}
                source={require('./../../assets/Repeat Grid 1.png')} /> 
          </Text>
          <Text style={styles.gridWrap}>
            100+ Members
            <Image
                style={styles.grid}
                source={require('./../../assets/Repeat Grid 2.png')} /> 
          </Text>
          <Text style={styles.gridWrap}>
            15+ Teams
            <Image
                style={styles.grid}
                source={require('./../../assets/Repeat Grid 3.png')} /> 
          </Text>
        </Text>
      </View>
      <View style={styles.item}>
        <Image 
            style={styles.img}
            source={require('./../../assets/Mask Group 1.png')}
            resizeMode='stretch'/>
        <View style={[styles.triangle, styles.overlay]}/>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '32pt',
    marginRight: '32pt',
    alignItems: 'flex-start',
    borderBottom: '2px solid black',
  },
  item: {
    flex: 1,
  },
  content: {
    color: '#103B81',
    marginBottom: '64pt',    
    fontSize: '18pt',
    fontWeight: 'normal',
    fontFamily: 'Avenir',
    lineHeight: '32px',
  },
  link: {
    display: 'block',
    marginTop: '16pt',
  },
  gridWrap: {
    display: 'block',
  },
  grid: {
    marginLeft: '1em',
    width: '381px',
    height: '14px',
  },
  img : {
    flex: 1,
    height: '967px',
    marginLeft: '49px',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 200,
    borderLeftWidth: 70,
    borderRightWidth: '425px',
    borderRightColor: 'transparent',
    borderTopColor: '#C1D82F',
    borderLeftColor: 'transparent',
    position: 'absolute',
    left: 180,
    top: 100,
    transform: [
      {skewX: '-30deg'}
    ],
  },
});
export default About;
