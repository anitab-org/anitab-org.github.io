import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Way from './Way';
import SectionHeader from '../../../Components/SectionHeader';
import data from '../../../content/contribution_ways';

const ContributionWays = () => (
  <View style={styles.container}>
    <View>
      <SectionHeader title={data.title} />
       { <Text style={styles.text}>{data.par}</Text>}
    </View>

    {data.ways.map((way, i) => (
      <Way
        key={i}
        heading={way.title}
        channels={way.channels}
        content={way.content}
        imageAlign={i % 2 ? 'right' : 'left'}
        image={way.image}
      />
    ))}
  </View>
);

export default ContributionWays;