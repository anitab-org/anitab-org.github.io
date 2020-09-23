import { View, Text } from 'react-native';
import { styled } from 'react-native-reflect';

export const Timeline = styled(View, {
  width: '80%',
  alignItems: 'left',
  paddingLeft: 16,
  paddingRight: 16,
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 32,
  marginBottom: '7vw',
});
export const Event = styled(View,{
    color:"#ffdd30",
    fontWeight: 600,
    fontSize: 25,
    borderColor: '#ffdd30',
    borderWidth: 0.5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 10,
    marginRight: 20,
    marginBottom: 5,
    borderRadius: '50px'
});
export const Line = styled(View,{
    width:'65vw',
    borderBottomWidth:10,
    borderBottomColor:'#ffdd30',
    color:'#ffdd30',
    position:'relative',
    top: '-60px',
    zIndex: '-1px'
});
export const Date = styled(View,{
    backgroundColor:'#ffdd30',
    color:'#fff',
    fontSize:20,
    padding: 10,
    width:45,
    height:45,
    borderRadius: '50px',
    textAlign: 'center',
    justifyContent:'center',
    position:'absolute',
    top: 7,
    // zIndex: '1'
    // position:'absolute',
    // top: 28
});