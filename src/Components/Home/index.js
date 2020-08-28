import React from 'react';
import Content from './Content';
import styles from './styles';
import {
    View
}from 'react-native';


function Home(){
    
    return(
        
        
            <View style = {styles.verticle, {flexWrap:"wrap"}}>
                <Content />
            </View>
           
    );
}

export default Home;