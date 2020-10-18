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
    var p=(18-4)*5-20;
    useEffect(() => {
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft(p);
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
            <View style={{flexDirection:'row',marginTop:'10px',marginBottom:'10px',width:'80%',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableWithoutFeedback onPress={scrollLeft} style={{justifyContent:'center',}}>
                        <ArrowLeftOutlined style={{color:'#42aaf5',paddingTop:'4px'}}/>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize:'16px',marginLeft:'5px'}}>PAST</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:'16px',marginRight:'5px'}}>FUTURE</Text>
                    <TouchableWithoutFeedback onPress={scrollRight}>
                        <ArrowRightOutlined style={{color:'#42aaf5',paddingTop:'4px'}}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={{width:'80%',flexWrap:'wrap',flexDirection:'column',marginBottom:'10vw'}}>
                <View style={{flex:1,width:'15%'}}>
                    {
                        events.map((item)=>(
                            <Event style={{color:item.color,borderColor:item.color,flex:1}}>{item.event}</Event>
                        ))
                    }
                </View>
                <ScrollView
                horizontal={true}
                style={{ marginBottom:'5vw',marginTop:'3vw',flexDirection:'column',width:'80%',flex:4,position:'absolute',right:'0',top:'-45px'}}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={{width:'90%'}}>
                        {
                            events.map((item)=>(
                                <View style={{flexDirection:'row'}} key={item.event}>
                                    <Line style={{left:(item.date[0]-1)*5+'%',flexDirection:'row', width:item.date[item.date.length-1]*10+'vw', borderBottomColor:item.color}}></Line>
                                    {
                                        item.date.map((d)=>(
                                            <Date style={{left:(d-1)*5+'%',backgroundColor:item.color}} key={d}>{d}</Date>
                                        ))
                                    }
                                    <Fade style={{width:(18-1)*5+'%'}}></Fade>
                                    <Marker style={{left:(18-1)*5+2+'%'}}></Marker>
                                </View>
                            ))
                        }
                        <View style={{left:(18-1)*5+3+'%',marginBottom:'15px'}}><Text>Today 18th October</Text></View>
                    </View>
                </ScrollView>
            </View>
      </>
  );
}
export default Programs;
