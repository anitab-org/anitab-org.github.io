import React, {useEffect,useState} from 'react';
import {ScrollView,Text,View} from 'react-native';
import {Event,Line,Date,Marker,Fade} from './styles';
const events=[
    {
        event:"GSOC'20",
        date:[1,7,8,12,18,20,31,40,50],
        color:'#ffdd30'
    },
    {
        event:"Rails Girls'20",
        date:[5,18,25,30,35,40],
        color:'#039eff'
    },
]
function Programs() {
    // const [currentDate] =  useState(0);
    useEffect(() => {
    //    var currentDate = new Date().getDate();
       console.log(new Date().getDate());
    })
    // const getCurrentDate=()=>{
    //     var date = new Date().getDate();
    //     console.log(date);
    //     return date;
    // }
  return (
    <ScrollView
        horizontal={true}
        style={{ marginBottom:'5vw',marginTop:'3vw',flexDirection:'column', width:'80%'}}
        key={0}
        >
        <View style={{width:'80%'}}>
            {
                events.map((item)=>(
                    <View style={{flexDirection:'row'}} key={item.event}>
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
                        <Fade style={{width:(15-1)*5+'%'}}></Fade>
                        <Marker style={{left:(15-1)*5+20+'%'}}></Marker>

                    </View>
                ))
            }
            <View style={{left:(15-1)*5+21+'%',marginBottom:'15px'}}>Today 15th October</View>
        </View>
    </ScrollView>
  );
}
export default Programs;
