import React,{useState, useEffect} from 'react';
import SectionSubheader from '../SectionSubheader'
import content from '../../content/about_us.json';
import AnimatedNumber from 'react-native-animated-number';
import {MainContainer, Box, ImgBox, Img, Content, Description} from './styles'


function AboutUsSection(){
    const members = content.sections[3].content[0].par;
    const no_of_members = parseInt(members.substring(0, 5))
    const remaining = members.substring(4,14)

    const [number, setNumber] = useState(0);
    
    useEffect(() => {
      setNumber(number =>number+no_of_members)
  },[no_of_members]);

  return(
  	  <MainContainer>
      <Box>
      <Content>
      <SectionSubheader title={content.sections[0].title}/>
      <Description>{content.sections[0].content[0].par} {content.sections[0].content[1].par} 
      </Description> 
      </Content>

      <Content>
      <SectionSubheader title={content.sections[1].title}/>
      <Description>{content.sections[0].content[0].par} {content.sections[0].content[1].par} 
      </Description> 
      </Content>

      <Content>
      <SectionSubheader title={content.sections[2].title}/>
      <Description>{content.sections[0].content[0].par} {content.sections[0].content[1].par} 
      </Description>
      </Content>

      <Content>
      <SectionSubheader title={content.sections[3].title}/>
      <Description>
      <AnimatedNumber style={{width: 32, color: '#103B81'}} value={number} />{remaining}{"\n"}
      {content.sections[3].content[1].par}{"\n"} 
      {content.sections[3].content[2].par} 
      </Description>
      </Content>
      
      </Box>
      <ImgBox>
       <Img
        source={require('../../assets/about.png')} 
        resizeMode='cover'
        />
      </ImgBox>
      </MainContainer>

	)


} 

export default AboutUsSection