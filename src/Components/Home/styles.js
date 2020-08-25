// import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 32,
    // height:"auto",
    // flexGrow: 1,
    flexDirection: 'row',
    // alignItems:"center",
    // justifyContent:"center",
    width: '100%' ,
  },
  verticle:{
    // flexShrink: 1,
      flexDirection: 'column'
  },
  imageEven:
  {
    // flex: 0.1,  
    alignItems: 'center', 
    width: 350,  
    paddingLeft:32,
    marginRight: 32,
    alignSelf: 'center'
    
    },
  contentEven: 
  {
    // flexShrink: 1,
    //  flex:0.9,
    // overflow:,
    width: 1000,
    paddingRight: 32,
    // alignSelf:'flex-end',
    // position:"absolute",
    // right: 0,
     //width: '100%'
},
imageOdd:
  {
    alignItems: 'center' ,
    paddingRight: 32,
    marginLeft: 32,
    // width: '20%',
    width: 397,
    flex: 20,
    flexWrap: "wrap",
    alignSelf: 'center',
    position:"absolute",
    right: 0,
    },
  contentOdd: 
  {
    // overflow:,
    width: 1000,
    paddingLeft: 32,
    alignSelf:'flex-start',
    //flexWrap: "wrap",
    // position:"absolute",
    // right: 0,
     //width: '100%'
    //flex: 80
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
    fontFamily:'./../../Avenir-Medium',
    color: '#103B81',
  },
  description: {
    marginTop:8,
    fontSize: 18,
    color: '#103BB1',
    // width:1000,
    fontFamily:'./../../Avenir-Light',
    textAlign:"left",
    // flexShrink:1,
    // flex: 1,
    // fontWeight:
    //width:"200"
  },
});

export default styles;
