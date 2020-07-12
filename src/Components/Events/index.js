import React from 'react';
import { View } from 'react-native';
import Event from './Event';


const Events = () => {

    return (
        <View style={{

            paddingLeft: 32,
            paddingRight: 32,
        }}>
            <Event />
            <View style={{
                borderWidth: '0.05em',
                borderColor: '#C0C0C0',

            }} />

        </View>
    );
};

export default Events;