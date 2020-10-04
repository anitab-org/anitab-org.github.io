import { View, Text } from 'react-native';
import { styled } from 'react-native-reflect';

export const Event = styled(View,{
    color:"#ffdd30",
    fontWeight: 600,
    fontSize: 25,
    borderColor: '#ffdd30',
    borderWidth: 0.5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: '50px',
    textAlign: 'center',
    zIndex:'1px'
    // position: 'absolute'
});
export const Line = styled(View,{
    width:'80%',
    borderBottomWidth:10,
    borderBottomColor:'#ffdd30',
    color:'#ffdd30',
    position:'absolute',
    top: '20px',
    left: '20%',
    zIndex: '-10px'
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
    // justifyContent:'center',
    position:'absolute',
    // top: 5,
});