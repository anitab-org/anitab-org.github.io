import React from 'react';
import {ScrollView,Text,View } from 'react-native';
import {Event,Line,Date,Stroke,Marker,Fade} from './styles';
const events=[
    {
        event:"GSOC'20",
        date:[1,,7,8,12,18,20,31],
        color:'#ffdd30'
    },
    {
        event:"Rails Girls'20",
        date:[5,18,25],
        color:'#039eff'
    },
]
const tmp=45;
function Programs() {
  return (
      <View style={{ marginBottom:'5vw',marginTop:'3vw',flexDirection:'column', width:'80%'}}>
        {events.map((e)=>(
            <View style={{flexDirection:'row'}}>
                <Event style={{
                    width:'15%',
                    color:e.color,
                    borderColor: e.color,
                }}> {e.event} </Event>
                {/* <Stroke style={{ left:-800}}></Stroke> */}
                <Line style={{flexDirection:'row', width:'65vw', borderBottomColor:e.color}}></Line>
                {/* <Fade style={{ left:-1100 + tmp*e.date[0]}}></Fade> */}
                <>
                    {
                        e.date.map((d)=>(
                            <Date style={{left:(d-1)*2.5+20+'%',backgroundColor:e.color}}>{d}</Date>
                        ))
                    }
                </>
            </View>
        ))}
      </View>
  );
}
export default Programs;
