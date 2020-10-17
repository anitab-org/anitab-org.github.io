import { View, Text } from 'react-native';
import { styled } from 'react-native-reflect';

export const Event = styled(Text,{
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
    zIndex:'1px',
    position:'relative'
});
export const Line = styled(View,{
    width:'200vw',
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
    position:'absolute',
});
export const Marker = styled(View,{
    backgroundColor:'#000',
    width:'2px',
    height: '90px',
    position:'absolute',
    top: '29px',
    zIndex:'-1px'
});
export const Fade = styled(View,{
    backgroundColor:'#fff',
    height:'90px',
    position:'absolute',
    opacity:'0.6',
    // top: '10px',
    left: '20%',
})