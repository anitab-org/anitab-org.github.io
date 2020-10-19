import React, {useEffect} from 'react';
import {ScrollView,Text,View,TouchableWithoutFeedback} from 'react-native';
import {Event,Line,Date,Marker,Fade,Stroke} from './styles';
import $ from 'jquery';
import {ArrowLeftOutlined ,ArrowRightOutlined} from '@ant-design/icons'
import dayjs from 'dayjs'
const events=[
    {
        event:"GSoC'20",
        date:[[0,1],[0,7],[0,8],[0,12],[0,18],[0,20],[0,31],[1,10],[1,20]],
        color:'#ffdd30'
    },
    {
        event:"Rails Girls'20",
        date:[[0,5],[0,7],[0,9],[0,22],[0,28],[0,31],[1,8],[1,10]],
        color:'#039eff'
    },
]
const months = [[0,"January"],[1,"February"],[2,"March"],[3,"April"],[4,"May"],[5,"June"],[6,"July"],[7,"August"],[8,"September"],[9,"October"],[10,"November"],[11,"December"]];
function Timeline() {
    var p = dayjs().date();
    useEffect(() => {
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft(p);
    })
    const scrollLeft=()=>{
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
                            <View key={item.event}>
                                <Event style={{color:item.color,borderColor:item.color,flex:1,left:item.date[0][1]+5+'vw'}}>{item.event}</Event>
                                <Stroke></Stroke>
                            </View>
                        ))
                    }
                </View>
                <ScrollView
                horizontal={true}
                style={{ marginBottom:'5vw',marginTop:'3vw',flexDirection:'column',width:'70%',position:'absolute',right:'0',top:'-45px'}}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={{width:'90%'}}>
                        {
                            events.map((item)=>(
                                <View style={{marginBottom:'3vw',flexDirection:'column'}} key={item.event}>
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
