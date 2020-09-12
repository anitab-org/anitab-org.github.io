import {View, Text, Image} from 'react-native';
import { styled } from "react-native-reflect";

 
export  const MainContainer=styled(View,{
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
})

export const Box = styled(View, {
  // Responsive -> 100% on smaller screens, 50% on larger screens
  width: ["100%", "50%"],
  marginLeft:32
});
export const ImgBox = styled(View,{
  flex:1,
  flexDirection: 'row',
  alignItems:'center',
  justifyContent:'center'
})

export const Img = styled(Image,{
  width:[500,500,400,500], 
  height:[500,500,400,500], 
  top: 20,
  paddingRight: 16
})

export const Content = styled(View,{
marginRight:[16,0]

})

export const Description = styled(Text,{
  textAlign: 'left',
  fontFamily: 'Segoe UI',
  fontSize: 14,
  color: '#103B81',
  opacity: 1,
  paddingLeft: 16
})

