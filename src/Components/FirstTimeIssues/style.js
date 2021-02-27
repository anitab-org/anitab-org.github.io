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
});
export const IssueContainer=styled(View,{
    padding: 16,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor:'#e1e4e8',
    flexDirection:'row',
    flex:1,
    fontSize:18,
});
export const Labels=styled(Text,{
    paddingHorizontal:8,
    paddingVertical:2,
    marginLeft:2,
    marginVertical:2,
    fontWeight:600,
})