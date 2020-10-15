import React from 'react';
import {ScrollView,Text,View,FlatList} from 'react-native';
import {Event,Line,Date,Stroke,Marker,Fade} from './styles';
const events=[
    {
        event:"GSOC'20",
        date:[1,7,8,12,18,20,31,40,50,100],
        color:'#ffdd30'
    },
    {
        event:"Rails Girls'20",
        date:[5,18,25,30,35,40],
        color:'#039eff'
    },
]
// const tmp=45;
function Programs() {
  return (
    <ScrollView
        horizontal={true}
        style={{ marginBottom:'5vw',marginTop:'3vw',flexDirection:'column', width:'80%'}}
        >
        <View style={{width:'80%'}}>
            {
                events.map((item)=>(
                    <View style={{flexDirection:'row'}}>
                        <Event style={{
                            color:item.color,
                            borderColor: item.color,
                        }}> {item.event} </Event>
                        <Line style={{flexDirection:'row', width:'1000%', borderBottomColor:item.color}}></Line>
                        {
                            item.date.map((d)=>(
                                <Date style={{left:(d-1)*5+20+'%',backgroundColor:item.color}}>{d}</Date>
                            ))
                        }
                    </View>
                ))}
        </View>
    </ScrollView>
  );
}
export default Programs;
