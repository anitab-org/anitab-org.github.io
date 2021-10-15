import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import ScaledImage from '../../ScaledImage';
import EventInfoModal from '../Modal';
import { withCard } from './../../../Decorators/Card';
import Badge from './CardBadge';

const EventCard = ({ props,links }) => {
    const {calendarIcon, timeIcon, locationIcon} = links;
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
     <View style={styles.card} >
        <ScaledImage width={286} source={props.highlights.source} />
        <Text style={styles.title}>{props.title}</Text>
        <Badge text={props.date} link={calendarIcon}  />
        <Badge text={props.location} link={locationIcon} />
        <Badge text={props.timings} link={timeIcon} />
        <View style={{marginTop: 32}}>
            <Text numberOfLines={3}>
            {props.description.map((detail,index) => (
                <Text
                    style={styles.detailStyles}
                    key={index}
                >
                    {detail.par}
                </Text>
            ))}
            </Text>
        </View>
        <br/>
        <View style={styles.btn}>
            <Button title="Read more" onPress={()=>{setIsModalVisible(true)}}/>
        </View>
        {/* Event Info Modal Popup */}
        <EventInfoModal isVisible={isModalVisible} onRequestClose={()=>{setIsModalVisible(false)}} animationType={"slide"} data={props} links={links}/>
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
    btn:{
        marginVertical:5
    }
})

export default withCard(EventCard);

