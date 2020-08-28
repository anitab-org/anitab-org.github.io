import { StyleSheet, Dimensions } from 'react-native';
 
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  verticle:{
      flexDirection: 'column',
      width: width
  },
  imageEven:
  { 
    width: (width>800) ? 300 : '100%',
    alignItems: 'center', 
    paddingLeft:32,
    marginRight: 32,
    marginTop: 32,
    alignSelf: 'center',
    
    },
  contentEven: 
  {
    width: (width>800) ? width * 0.7 : width*0.85,
    paddingRight: (width>800) ? 32 : 0,
    marginTop: 32,
},
imageOdd:
  {
    paddingRight: 32,
    marginLeft: 32,
    marginTop: 32,
    width: width * 0.19,
    alignSelf:"center"
    },
  contentOdd: 
  {
    width: (width>800) ? width * 0.7 : width*0.85,
    marginTop: 32,
    paddingLeft: (width>800) ? 32 : 0,
},

  heading: {
    fontSize: 24,
    fontWeight: 500,
    fontFamily:'./../../Avenir-Medium',
    color: '#103B81',
  },
  description: {
    marginTop:8,
    fontSize: 18,
    color: '#103BB1',
    fontFamily:'./../../Avenir-Light',
    textAlign:"left",
    flexWrap:"wrap"
  },
}

);

export default styles;
