import React, {useEffect,useRef} from 'react';
import dayjs from 'dayjs';
import {StyleSheet,Text,View,TouchableWithoutFeedback,ScrollView} from 'react-native';
import {Event,Line,Date,Marker,Fade,Stroke,MainContainer,ArrowNavigation,ArrowText,ScrollContainer,Container,Months} from './styles';
import {ArrowLeftOutlined ,ArrowRightOutlined} from '@ant-design/icons'
import {getEvents,getMonths} from '../../content/programs_events'
//--------------------------------------------------------------------------------------------
const events  = getEvents();
const months = getMonths();
const styles=StyleSheet.create({
    scroller:{
        width:'70%',
        position:'absolute',
        right:0,
    }
})
function Timeline() {
    var p = dayjs().date(); //current date
    var curr_month = dayjs().month(); //current month
    const scrollRef = useRef();
    //scrolls the timeline to the current date and month
    useEffect(() => {
        scrollRef.current.scrollTo({x:(30*curr_month+p-1)*40});
    })
    //onclick scrolls the timeline to the left
    const scrollLeft=()=>{
        scrollRef.current.scrollTo({x:p-=35});
        if(p<0)
            p=0;
    }
    //onclick scrolls the timeline to the right
    const scrollRight=()=>{
        scrollRef.current.scrollTo({x:p+=35});
    }
  return (
      <>
            <MainContainer style = {styles.MainContainer} >
                <ArrowNavigation>
                    <View style={{flexDirection:'row'}}>
                        <TouchableWithoutFeedback onPress={scrollLeft}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{paddingTop: 3}}>
                                    <ArrowLeftOutlined/>
                                </View>
                                <ArrowText>PAST</ArrowText>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableWithoutFeedback onPress={scrollRight}>
                            <View style={{flexDirection:'row'}}>
                                <ArrowText>FUTURE</ArrowText>
                                <View style={{paddingTop: 3}}>
                                    <ArrowRightOutlined/>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ArrowNavigation>
                <ScrollContainer>
                    {
                        events.map((item,index)=>(
                            <View key={index}>
                                <Event
                                    style={{
                                    color:item.color,
                                    borderColor:item.color,
                                    flex:1,
                                    left:item.date[0][2]*10,
                                    borderRadius: 50,
                                    zIndex:1,
                                    }}
                                >
                                    {item.event}
                                </Event>
                                <Stroke style={{width:(item.date[0][1]+5)*20}}></Stroke>
                            </View>
                        ))
                    }
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ref={scrollRef}
                    style={styles.scroller}
                    >
                        <Container>
                            {
                                events.map((item,index)=>(
                                    <View style={{marginBottom:32,flexDirection:'column'}} key={index}>
                                        <Line style={{left:(item.date[0][1]-1)*40, width:30*12*50, borderBottomColor:item.color}}></Line>
                                        {
                                            item.date.map((d)=>(
                                                <Date
                                                style={{
                                                    left:(30*d[0]+d[1]-1)*40,
                                                    backgroundColor:item.color,
                                                    borderRadius: 50,
                                                }}
                                                key={30*d[0]+d[1]}>
                                                    {d[1]}
                                                </Date>
                                            ))
                                        }
                                        <Fade style={{left:(item.date[0][1]-1)*40,width:(p-item.date[0][1])*40+20}}></Fade>
                                        <Marker style={{left:(p-1)*40+20,zIndex:-1}}></Marker>
                                    </View>
                                ))
                            }
                            <View style={{left:(p-1)*40+25}}><Text>Today {dayjs().date()}th {months[curr_month][1]}</Text></View>
                            <View style={{flexDirection:'row'}}>
                                {
                                    months.map((m,index)=>(
                                        <div key={index}>
                                            <Months  style={{left:(m[0]*30)*40}}><Text>1st {m[1]}</Text></Months>
                                        </div>
                                    ))
                                }
                            </View>
                        </Container>
                    </ScrollView>
                </ScrollContainer>
            </MainContainer>
      </>
  );
}
export default Timeline;
