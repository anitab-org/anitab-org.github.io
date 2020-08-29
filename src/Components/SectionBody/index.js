import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');
function SectionBody({content, width}){
    return (
        <View style={styles.container} >
            <Text style={styles.body}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body:  {
        marginTop:8,
        fontSize: 18,
        color: '#103BB1',
        fontFamily:'./../../Avenir-Light',
        textAlign:"left",
        flexWrap:"wrap"
      },
    container: {
      flex: 1,
      width: (width - 0.7*width>=400) ? width*0.7 : width*0.9,
      paddingTop: 64,
    },
  });
  
  export default SectionBody;
  