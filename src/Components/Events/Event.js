import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    View, Text, Image, TouchableHighlight,
} from 'react-native';
import content from '../../content/events.json';
import { Dimensions } from "react-native";



export default class Event extends Component {
    constructor() {
        super();
        this.state = { screenWidth: "" }
    }

    getScreenSize = () => {
        const screenWidth = Math.round(Dimensions.get('window').width);
        this.setState({ screenWidth: screenWidth })
    }





    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.left]}>
                    <Text style={[styles.heading]}>{content['sections'][0].title}</Text>
                    <Text style={[styles.description]}>
                        {content['sections'][0].content}</Text>
                </View>
                <View style={[styles.middle]} />
                <View
                    style={{
                        width: '40%', paddingTop: 64,
                        justifyContent: 'center', flex: 1,

                    }}
                >
                    <Image
                        style={[styles.img]}
                        source={require('./../../assets/events.png')}
                    />
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',


        flexWrap: 'wrap',
        flexDirection: 'row'


        // justifyContent: 'space-between'
    },


    heading: {
        fontSize: '2.55em',
        fontWeight: 500,
        paddingBottom: 5,
        paddingTop: 40,
        color: '#103B81',
    },
    description: {
        fontSize: '1.4em',
        fontWeight: 300,
        color: '#103B81',
        paddingBottom: 32,

    },
    left: {
        width: '50%'
    },
    middle: {
        width: '2.3em',
        //height: '13em'
    },
    img: {
        height: '12rem',
        width: '43.4rem',
    }


});



