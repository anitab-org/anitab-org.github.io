import { View, Text } from 'react-native';
import { styled } from 'react-native-reflect';
export const TableHeader=styled(View,{
    backgroundColor:'#f6f8fa',
    padding: 16,
    borderWidth: 0.5,
    borderColor:'#e1e4e8',
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
    flexDirection:'row',
    flex:1,
    marginTop:20,
});
export const TableHeaderText=styled(Text,{
    flex:1,
    textAlign:'center',
    color: '#586069',
})