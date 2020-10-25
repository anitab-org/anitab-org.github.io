import React, {useEffect} from 'react';
import {ScrollView,Text,View,TouchableWithoutFeedback} from 'react-native';
import {Event,Line,Date,Marker,Fade,Stroke} from './styles';
import $ from 'jquery';
import {ArrowLeftOutlined ,ArrowRightOutlined} from '@ant-design/icons'
import dayjs from 'dayjs'
import {getEvents,getMonths} from '../../content/programs_events'
const events  = getEvents();
const months = getMonths();
function Timeline() {
    var p = dayjs().date();
    //scrolls the timeline to the current date and month
    useEffect(() => {
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft(p+500);
    })
    //onclick scrolls the timeline to the left
    const scrollLeft=()=>{
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft(p-=35);
        if(p<0)
        p=0;
    }
    //onclick scrolls the timeline to the right
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
                            <View key={item.event}>
                                <Event style={{color:item.color,borderColor:item.color,flex:1,left:item.date[0][1]+5+'vw'}}>{item.event}</Event>
                                <Stroke></Stroke>
                            </View>
                        ))
                    }
                </View>
                <ScrollView
                horizontal={true}
                style={{ marginBottom:'5vw',marginTop:'45px',flexDirection:'column',width:'70%',position:'absolute',right:'0',top:'-45px'}}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={{width:'90%'}}>
                        {
                            events.map((item)=>(
                                <View style={{marginBottom:'47px',flexDirection:'column'}} key={item.event}>
                                    <Line style={{left:(item.date[0][1]-1)*5+'%', width:30*12*5+'vw', borderBottomColor:item.color}}></Line>
                                    {
                                        item.date.map((d)=>(
                                            <Date style={{left:(30*d[0]+d[1]-1)*5+'%',backgroundColor:item.color}} key={30*d[0]+d[1]}>{d[1]}</Date>
                                        ))
                                    }
                                    <Fade style={{left:(item.date[0][1]-1)*5+'%',width:(p-item.date[0][1])*5+2+'%'}}></Fade>
                                    <Marker style={{left:(p-1)*5+2+'%'}}></Marker>
                                </View>
                            ))
                        }
                        <View style={{left:(p-1)*5+3+'%',marginBottom:'15px'}}><Text>Today {dayjs().date()}th October</Text></View>
                        <View style={{flexDirection:'row'}}>
                            {
                                months.map((m)=>(
                                    <>
                                        <View style={{left:(m[0]*30)*5+1+'%',marginBottom:'15px',top:'-44px'}}><Text>1st {m[1]}</Text></View>
                                    </>
                                ))
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
      </>
  );
}
export default Timeline;
