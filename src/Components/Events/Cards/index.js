import React, { useContext } from 'react';
import { Text, StyleSheet, View, Linking } from 'react-native';
import ScaledImage from '../../ScaledImage';
import { withCard } from './../../../Decorators/Card';
import Badge from './CardBadge';
import { ThemeContext } from '../../../Context/ThemeContext';

const EventCard = ({ props, links }) => {
  const { colors } = useContext(ThemeContext);
  const { calendarIcon, timeIcon, locationIcon } = links;
  return (
    <View style={[styles.card, { backgroundColor: colors.cardBackground }]}>
      <ScaledImage width={286} source={props.highlights.source} />
      <Text style={[styles.title, { color: colors.text }]}>{props.title}</Text>
      <Badge text={props.date} link={calendarIcon} />
      <Badge text={props.location} link={locationIcon} />
      <Badge text={props.timings} link={timeIcon} />
      <View style={{ marginTop: 32 }}>
        {props.description.map((detail, index) => (
          <Text
            style={[styles.detailStyles, { color: colors.text }]}
            key={index}
          >
            {detail.par}
          </Text>
        ))}
      </View>
      <Text
        style={[styles.know_moreStyles, { color: colors.text }]}
        onPress={() => {
          Linking.openURL(props.know_more.link);
        }}
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
    fontWeight: '200',
  },
  know_moreStyles: {
    color: '#103B81',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 32,
  },
});

export default withCard(EventCard);
