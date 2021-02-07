import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScaledImage from './../ScaledImage';

const ImageTextSection = ({
  title,
  image,
  content,
  imageSide,
  imageHeight = 300,
}) => {
  const styles = createStyles(imageSide);
  return (
    <View style={styles.container}>
      <View style={styles.sectionImage}>
      <ScaledImage
        source={image}
        height={imageHeight}
      />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.header}>{title}</Text>
        {content.map((text , index) => (
          <Text key={index} style={styles.text}>{text.par}</Text>
        ))}
      </View>
    </View>
  );
};

const createStyles = (imageSide) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'left',
      flexDirection: imageSide === 'right' ? 'row-reverse' : 'row',
      flexWrap: 'wrap',
      marginTop: 64,
    },
    subContainer: {
      flex: 1,
      alignItems: 'left',
      flexDirection: 'columns',
      flexGrow: 1,
      minWidth: 200,
    },
    sectionImage: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    header: {
      flex: 0,
      color: '#103B81',
      alignItems: 'flex-start',
      fontWeight: '400',
      fontSize: 32,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 0,
      width: '100%',
    },
    text: {
      flex: 1,
      marginTop: 32,
      paddingLeft: 16,
      paddingRight: 16,
      fontSize: 18,
      flexGrow: 1,
      fontWeight: 200,
      color: '#103B81',
    },
  });

export default ImageTextSection;
