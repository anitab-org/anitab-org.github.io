import React from 'react';
import {Text, StyleSheet, View, Linking} from 'react-native';
import ScaledImage from '../../ScaledImage';
import { withCard } from './../../../Decorators/Card';
import Badge from './CardBadge';

const EventCard = ({ props }) => {
    return (
     <View style={styles.card} >
        <ScaledImage width={286}   source={props.highlights.source} />
        <Text style={styles.title}>{props.title}</Text>
        <Badge text={props.date} link={require('./../../../assets/events_and_highlights/calendar.png')}  />
        <Badge text={props.location} link={require('./../../../assets/events_and_highlights/location.png')} />
        <Badge text={props.timings} link={require('./../../../assets/events_and_highlights/time.png')} />
        <View style={{marginTop: 32}}>
            {props.description.map((detail,index) => (
                <Text
                    style={{
                        color: '#103B81',
                        fontSize: 16,
                        fontWeight: '200'
                    }}
                    key={index}
                    >
                    {detail.par}
                </Text>
            ))}
        </View>
        <Text style={{
            color: '#103B81',
            fontSize: 16,
            fontWeight: '400', 
            marginTop: 32,
        }}
        onPress={() => {Linking.openURL(props.know_more.link)}}
        >
        {props.know_more.par}
        </Text>
     </View>   
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: 286,
        borderRadius: 4,
        overflow: 'hidden', 
    },
    title: {
        color: '#103B81',
        fontWeight: '400',
        fontSize: 16,
        marginTop: 16,
    },
    desc: {
        fontSize: 16,
        color: '#103B81',
        fontWeight: 200,
        marginTop: 16,
    },
})

export default withCard(EventCard);

