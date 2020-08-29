import React from 'react';
import Content from './Content';
import GettingStarted from './GettingStarted';
import OurProjects from './OurProjects';
import OpenSourcePrograms from './OpenSourcePrograms';
import WaysToContribute from './WaysToContribute';
import styles from './styles';
import {
    View
}from 'react-native';


function Home(){
    
    return(        
            <View style = {styles.verticle, {flexWrap:"wrap"}}>
                <GettingStarted />
                <WaysToContribute />
                <OurProjects />
                <OpenSourcePrograms />
            </View>
           
    );
}

export default Home;