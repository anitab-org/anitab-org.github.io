import React from 'react';
import {Text, StyleSheet, View, Linking} from 'react-native';
import ScaledImage from '../../ScaledImage';
import { withCard } from './../../../Decorators/Card';
import Badge from './CardBadge';


const EventCard = ({ props,links }) => {
    const {calendarIcon, timeIcon, locationIcon} = links;
    return (
     <View style={styles.card} >
        <ScaledImage width={286}   source={props.highlights.source} />
        <Text style={styles.title}>{props.title}</Text>
        <Badge text={props.date} link={calendarIcon}  />
        <Badge text={props.location} link={locationIcon} />
        <Badge text={props.timings} link={timeIcon} />
        <View style={{marginTop: 32}}>
            {props.description.map((detail,index) => (
                <Text
                    style={styles.detailStyles}
                    key={index}
                >
                    {detail.par}
                </Text>
            ))}
        </View>
        <Text style={styles.know_moreStyles}
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
    detailStyles: {
        color: '#103B81',
        fontSize: 16,
        fontWeight: '200'
    },
    know_moreStyles: {
        color: '#103B81',
        fontSize: 16,
        fontWeight: '400', 
        marginTop: 32,
    },
})

export default withCard(EventCard);

