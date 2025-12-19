import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles';
import { ThemeContext } from '../../../Context/ThemeContext';

function ContributionCard({ imageFile, imageText = [], style = [] }) {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[...style, styles.card]}>
      <Image
        source={require(`./../../../assets/contribution/${imageFile}`)}
        style={styles.contributionImage}
        resizeMode="contain"
      />
      {imageText.map((text, index) => {
        return (
          <Text key={index} style={[styles.imageText, { color: colors.text }]}>
            {text}
          </Text>
        );
      })}
    </View>
  );
}

export default ContributionCard;
