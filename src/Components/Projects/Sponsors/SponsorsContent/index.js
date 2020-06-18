import React, { useEffect, useState, noop, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import ScaledImage from './../../../ScaledImage';

function SponsorsContent(sectionContent, index) {
  return (
    <View style={styles.contentContainer} key={sectionContent.source + index}>
      <ScaledImage {...sectionContent} height={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    borderRadius: 5,
    padding: 16,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});

export default SponsorsContent;
