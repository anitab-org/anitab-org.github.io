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
function Programs() {
    var p = dayjs().date();
    useEffect(() => {
        var scroll = $('.css-view-1dbjc4n');
        scroll.scrollLeft(p);
        console.log(dayjs().date());
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
                                <View style={{flexDirection:'row'}} key={item.event}>
                                    <Line style={{left:(item.date[0][1]-1)*5+'%',flexDirection:'row', width:item.date[item.date.length-1][1]*10+'vw', borderBottomColor:item.color}}></Line>
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
                    </View>
                </ScrollView>
            </View>
      </>
  );
}
export default Programs;
