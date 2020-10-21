import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Image, View, StyleSheet} from 'react-native';
// import { OSCommunity } from './styles';

function MembersIcon (props){
    console.log(props);
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
    <View style={{flex:1, padding: 24, flexWrap: "wrap", flexDirection: "row"}}>
        {isLoading ? <ActivityIndicator/>:(
            data.map((members) => (
            <MembersIcon {...members} key={members.id} />
            ))
        )}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        // alignSelf:'baseline',
        // alignItems: 'center',
        padding: 5,
        marginTop: 8,
    },
    image: {
      width: 40,
      height: 40,
      resizeMode: 'stretch'
    }
  
  });
export default OSCommunity;