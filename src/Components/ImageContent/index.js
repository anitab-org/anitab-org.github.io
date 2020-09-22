import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ScaledImage from './../ScaledImage';

const ImageContent = ({
  image,
  imageSide,
  minImageWidth = 500,
  Children,
  imageProportion = 0.5,
}) => {
  const [imageContainerWidth, setImageContainerWidth] = useState(minImageWidth);
  const styles = createStyles(imageSide);
  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        const imagePaddingSideSum = 32;
        if (width > minImageWidth - imagePaddingSideSum) {
          setImageContainerWidth(
            (width - imagePaddingSideSum) * imageProportion,
          );
        } else {
          setImageContainerWidth(width - imagePaddingSideSum);
        }
      }}
    >
      <ScaledImage
        source={image}
        width={imageContainerWidth}
        style={styles.sectionImage}
      />
      <View style={styles.subContainer}>
        <Children />
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
      marginTop: 32,
    },
    subContainer: {
      flex: 1,
      alignItems: 'left',
      flexDirection: 'columns',
      flexGrow: 1,
      minWidth: 200,
    },
    sectionImage: {
      flex: 1,
      paddingLeft: 16,
      paddingRight: 16,
    },
  });

export default ImageContent;
