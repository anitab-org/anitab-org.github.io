import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 18,
      marginBottom: 18,
    },
    card:{
      width: '33%',
    },
    cardMiddle: {
      alignItems: "center"
    },
    cardLast: {
      alignItems: 'flex-end'
    },
    contributionImage: {
      width: 235,
      height: 235
    },
    imageText: {
      fontSize: 14,
      fontWeight: '300',
      fontFamily: 'Avenir',
      textAlign: 'center',
      width: 180,
      flex: 1,
      color: '#103B81'
    },
    description: {
      fontSize : 14,
      fontWeight: '300',
      color: '#103B81',
      marginLeft: 18,
      }
    
  
  });

  export default styles;