import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap:'wrap',
    marginTop: 64,
    paddingHorizontal: 32
  },
  verticl:{
      flexDirection: 'column'
  },
  imageEven:
  {
    width: '20%',
    alignSelf: 'flex-start',
    },
  contentEven: 
  {
    // overflow:,
    alignSelf:'flex-end',
    width: '80%'
},
imageOdd:
  {
    width: '20%',
    alignSelf: 'flex-end',
    },
  contentOdd: 
  {
    // overflow:,
    alignSelf:'flex-start',
    width: '80%'
},
//   col: { alignItems: 'center' },
//   left: { width: 579 },
//   center: { width: 245 },
//   right: {
//     width: 573,
//     textAlign: 'center'
//   },
  heading: {
    fontSize: 24,
    fontWeight: 500,
    paddingBottom: 32,
    fontFamily:'Avenir',
    color: '#103B81',
  },
  description: {
    fontSize: 18,
    color: '#103BB1'
    // fontWeight:
  },
});

export default styles;
