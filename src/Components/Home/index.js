import React from 'react';
import Heading from './Heading';
import Content from './Content';
import styles from './styles';
import {
    StyleSheet,
    Text,
    View,
    Image
}from 'react-native';

// import ScaledImage from './ScaledImage';
// import styles from '../Footer/styles';

function Home(){
    return(
        
        <View style = {styles.container}>
            <View style = {styles.verticle}>
                <Content />
            </View>
            <Image
                style={{ height: 150, width: 150 }}
                source={require('./../../assets/home/1.png')}
            />
        </View>
    );
}

// const styles = StyleSheet.create({
//     container:{
//         flex:1
//     },
// });

export default Home;