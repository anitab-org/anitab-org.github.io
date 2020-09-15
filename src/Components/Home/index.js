import React from 'react';
import GettingStarted from './GettingStarted';
import OurProjects from './OurProjects';
import OpenSourcePrograms from './OpenSourcePrograms';
import WaysToContribute from './WaysToContribute';
import styles from './styles';
// import contentJson from '../../content/home';
import { getHome } from './../../content/home';
import {
    View
}from 'react-native';

const home = getHome();
const {sections} = home;
function Home(){
    
    return(        
            <View style = {styles.parent}>
                <GettingStarted content={sections[0]}/>
                <WaysToContribute content={sections[1]}/>
                <OurProjects content={sections[2]}/>
                <OpenSourcePrograms content={sections[3]}/>
            </View>
           
    );
}

export default Home;