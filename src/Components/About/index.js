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

let dimensions = Dimensions.get('window');
let imageHeight = Math.round((dimensions * 9)/16);
let imageWidth = dimensions.width;

function About(){
  return(
    <View style={styles.container}>
      <View style={styles.item}>

        <Text style={styles.header} >
          OUR MISSION
        </Text>
        <Text style={styles.content}>
          At AnitaB.org, we envision a future where the people who imagine and build
          technology mirror the people and societies for whom they build it. We connect,
          inspire, and guide women in computing, and organizations that view technology
          innovation as a strategic imperative. Our social enterprise supports women in
          technical fields, as well as the organizations that employ them and the academic
          institutions training the next generation. A full roster of programs help women grow,
          learn, and develop their highest potential.
        </Text>

        <Text style={styles.header}>
          OUR HISTORY
        </Text>
        <Text style={styles.content}>
          In 1987, computer scientist Anita Borg founded a digital community for women in computing.
          Today, AnitaB.org works with technologists in more than 80 countries, and partners with
          academic institutions and Fortune 500 companies worldwide.

        <TouchableHighlight
          style={styles.link}
          underlayColor='transparent'
          accessible={true}
          onPress={() => Linking.openURL('https://anitab.org/about-us/mission-and-history/')}
        >
         <Text>Learn More ></Text>
        </TouchableHighlight>
        </Text>

        <Text style={styles.header}>
          ABOUT ANITA BORG
        </Text>
        <Text style={styles.content}>
          Anita Borg combined technical expertise with a fearless vision to inspire, motivate,
          and move women in technology. Learn how her legacy continues to touch and change the
          lives of countless women in the fields of computing and beyond.
        <TouchableHighlight
          style={styles.link}
          underlayColor='transparent'
          accessible={true}
          onPress={() => Linking.openURL('https://anitab.org/about-us/about-anita-borg/')}
        >
         <Text>Learn More ></Text>
        </TouchableHighlight>
        </Text>

        <Text style={styles.header}>
          INSIGHTS 
        </Text>
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
  header: {
    color: '#103B81',
    fontSize: '32pt',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    marginBottom: '8pt',
    textAlign: 'left',
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
