import React from 'react';
import { View,Image,Text,StyleSheet,Linking,TouchableOpacity } from 'react-native';


function Cards()
{ 
    return (
<View style={styles.root}> 
  <Image source={require('./../../../assets/logo.png')} style={styles.cardimage}/>
  <Text  style={[styles.Heading,styles.big]}>Lorem Ipsum </Text>
     
        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
        <View style={styles.links}>
          <Image source={require('./../../../assets/github-logo.png')} style={{ width: 32, height: 32,marginTop:"8px" }}/>
           <Text style={[styles.text,styles.small]}> Github repo Link</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
        <View style={styles.links}>
          <Image source={require('./../../../assets/zulip-icon.png')} style={{ width: 32, height: 32,marginTop:"8px"  }}/>
          <Text style={[styles.text,styles.small]}>Zulip channel Link</Text>
        </View>
        </TouchableOpacity>

        <Text style={[styles.Heading,styles.small]}>
          Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
        </Text>
           <View style = {styles.tagContainer}>
             <Text style={[styles.javascript,styles.tag]}>Javascript</Text>
             <Text style={[styles.python,styles.tag]}> Python </Text>
             <Text style={[styles.java,styles.tag]}>  Java  </Text> 
           </View>
          <Text style={[styles.Heading,styles.small]}>
            Top Contributor
          </Text>
          <View style={styles.avatar}>
          <Image style ={styles.avatarimage} source={require("./../../../assets/man.jpg")} />
          <Image style ={styles.avatarimage} source={require("./../../../assets/man.jpg")} />
          <Image style ={styles.avatarimage} source={require("./../../../assets/man.jpg")} /> 
          </View>
       
    </View>
);
}

const styles = StyleSheet.create({
    root: {
        maxWidth: 440,
        maxHeight: 700,
        display: "flex",
        backgroundColor:"#E1E8FD",
      },
    avatarimage:{
      width:32,
      height:32,
      borderRadius:"50%",
      marginRight:10,
    },
    avatar: {
        flex: 1, 
        flexDirection: 'row',
        marginLeft:16,
        marginTop:16,
        marginBottom:16,
       },
    big:{
         fontSize:18,
       },
    small:{
         fontSize:16,
       },
    cardimage :{
      height: 256,
      width: 400,
      marginTop:16,
      marginBottom:16,
      marginLeft:20,
      marginRight:20,      
    },
    text: {
      color:"#103B81",
      marginLeft:8,
      marginRight:16,
      marginTop:16,
      fontWeight:"300",
      fontFamily:"avenir ",
    },
    Heading:{
      color:"#103B81",
      marginLeft:20,
      marginRight:16,
      fontWeight:"300",
      fontFamily:"avenir ",
    },
    links:{
      marginTop:8,
      marginLeft:20,
      flexDirection:"row",
      alignItems: 'left',
      paddingBottom:4,
      display:"flex",
    },
    tagContainer:{
        marginLeft:16,
        marginBottom:16,
        paddingTop: 15,
        flex: 1, 
        flexDirection: 'row',
      },
      tag:{
        Width:90,
        Height:24,
        flexShrink:3,
        margin:5,
        padding:2,
        display: "flex",
        alignItems: "left",
        textAlign:"center",
        borderRadius: 8,
        fontSize:16,
       
      },
      
      javascript:{
        backgroundColor: "yellow",
      },
      python:{
        backgroundColor: "turquoise",
      },
      java:{
        backgroundColor: "magenta",
      }
      
      
  });
export default Cards;