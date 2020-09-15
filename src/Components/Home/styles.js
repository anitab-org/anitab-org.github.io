import { View } from 'react-native';
import { styled } from "react-native-reflect";
 
export const MainContainer = styled(View,{
  flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
})

export const ParentContainer = styled(View,{
  flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 32,
    marginBottom: 32
})