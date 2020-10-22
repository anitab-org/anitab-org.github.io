import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Image, View, StyleSheet} from 'react-native';

function MembersIcon (props){
    
    return (
        <View style = {styles.container}>
            <a target="_blank" rel="noopener noreferrer" href={props.html_url}>
              <Image style={styles.image} source={props.avatar_url} />
            </a>  
        </View>
    );
}

function OSCommunity() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/orgs/anitab-org/members")
        .then((response) => response.json())
        .then((response) =>{
            var osdata = [] 
            response.forEach( ({id,avatar_url,html_url}) =>{
                osdata.push({ id,avatar_url ,html_url})
              })
            setData(osdata);
            })
        .catch((error)=>{console.log(error)})
        .finally(()=> setLoading(false));
    }, []);

    return(
        <View style={styles.iconscontainer}>
        {isLoading ? <ActivityIndicator/>:(
            data.map((members) => (
            <MembersIcon {...members} key={members.id} />
            ))
        )}
        </View>
    );
};

const styles = StyleSheet.create({
    iconscontainer:{
        flex:1,
        flexWrap: "wrap",
        flexDirection: "row",
        margin: 32,
        alignContent: "space-around"
    },
    container: {
        padding: 1,
        marginTop: 8,
    },
    image: {
      width: 81,
      height: 81,
      borderRadius: 8,
      resizeMode: 'stretch'
    }
  
  });
export default OSCommunity;