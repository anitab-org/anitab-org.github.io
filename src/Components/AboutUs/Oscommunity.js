import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
// import { OSCommunity } from './styles';

function OSCommunity() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

useEffect(()=>{
    fetch("https://api.github.com/orgs/anitab-org/members")
        .then((response) => response.json())
        .then((response) =>{
            var osdata = [] 
            response.forEach( (member) =>{
                osdata.push({ id: member.id, url: member.avatar_url , htmle: member.html_url})
              })
            setData(osdata);
            })
        .catch((error)=>{console.log(error)})
        .finally(()=> setLoading(false));
}, []);

return(
    <View style={{flex:1, padding: 24}}>
        {isLoading ? <ActivityIndicator/>:(
            <FlatList
                data = {data}
                keyExtractor = {({id}, index) => id}
                renderItem={({item}) => (
                    <Text>{item.url},{item.htmle}</Text>
                    // <Text> item </Text>
                )}
            />
        )}
    </View>
    );
};

export default OSCommunity;