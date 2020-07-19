import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SponsorsContent from './../SponsorsContent';
import SectionSubheader from './../../../SectionSubheader';

function Section({ header, content, index, expandable }) {
  const [sponsorsSizes] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const sponsors = content.map((img, index) =>
    SponsorsContent(img, sponsorsSizes, index),
  );
  console.log(index);

  const showMoreText = showMore ? 'Show less ↑' : 'View more ↓';

  return (
    <View style={styles.container} key={header + index}>
      <SectionSubheader title={header} />
      <View
        style={{
          ...styles.sponsors,
          flexDirection: 'row',
          flexWrap: 'wrap',
          height: showMore || !expandable ? 'auto' : 96,
          overflow: 'hidden',
        }}
      >
        {sponsors}
      </View>
      {expandable && (
        <TouchableOpacity
          onPress={() => {
            setShowMore(!showMore);
          }}
        >
          {setShowMore && <Text style={styles.moreText}>{showMoreText}</Text>}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#70707029',
    overflow: 'hidden',
    paddingBottom: 16,
  },
  moreText: {
    fontWeight: 200,
    forntSize: 16,
    marginLeft: 16,
    marginRight: 16,
    color: '#103B81',
  },
});

export default Section;
