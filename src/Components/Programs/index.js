import React, {useEffect,useState} from 'react';
import {ScrollView,Text,View,TouchableWithoutFeedback} from 'react-native';
import {Event,Line,Date,Marker,Fade} from './styles';
import $ from 'jquery';
import {ArrowLeftOutlined ,ArrowRightOutlined} from '@ant-design/icons'
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
    var p=(48-1)*15+22;
    useEffect(() => {
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft((48-1)*15+22);
    })
    const scrollLeft=(e)=>{
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft(p-=35);
        if(p<0)
        p=0;
    }
    const scrollRight=()=>{
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft(p+=35);
    }
  return (
      <>
            <View style={{flexDirection:'row',marginTop:'10px',width:'80%',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableWithoutFeedback onPress={scrollLeft}><ArrowLeftOutlined /></TouchableWithoutFeedback>
                    <Text>PAST</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>FUTURE</Text>
                    <TouchableWithoutFeedback onPress={scrollRight}><ArrowRightOutlined /></TouchableWithoutFeedback>
                </View>
            </View>
            <ScrollView
                horizontal={true}
                style={{ marginBottom:'5vw',marginTop:'3vw',flexDirection:'column', width:'90%'}}
                showsHorizontalScrollIndicator={false}
                >
                <View style={{width:'80%'}}>
                    {
                        events.map((item)=>(
                            <View style={{flexDirection:'row'}} key={item.event}>
                                <Event style={{
                                    color:item.color,
                                    borderColor: item.color,
                                    left:(item.date[0]-2)*4+5+'%'
                                }}> {item.event} </Event>
                                <Line style={{left:(item.date[0]-1)*5+20+'%',flexDirection:'row', width:item.date[item.date.length-1]*10+'vw', borderBottomColor:item.color}}></Line>
                                {
                                    item.date.map((d)=>(
                                        <Date style={{left:(d-1)*5+20+'%',backgroundColor:item.color}} key={d}>{d}</Date>
                                    ))
                                }
                                <Fade style={{width:(18-1)*5+'%'}}></Fade>
                                <Marker style={{left:(18-1)*5+22+'%'}}></Marker>
                            </View>
                        ))
                    }
                    <View style={{left:(18-1)*5+23+'%',marginBottom:'15px'}}>Today 18th October</View>
                </View>
            </ScrollView>
      </>
  );
}
export default Programs;
