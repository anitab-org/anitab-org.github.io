import { View, Text } from 'react-native';
import { styled } from 'react-native-reflect';
export const Event = styled(Text,{
    fontSize: 24,
    borderWidth: 0.5,
    paddingVertical:4,
    paddingHorizontal: 8,
    marginBottom: 4,
    textAlign: 'center',
    position:'relative',
    backgroundColor:'#fff',
    width:240
});
export const Line = styled(View,{
    borderBottomWidth:10,
    marginBottom:4,
    position:'relative',
    top: 16,
    left: 20,
});
export const Date = styled(View,{
    backgroundColor:'#ffdd30',
    color:'#fff',
    fontSize:20,
    width:45,
    height:45,
    textAlign: 'center',
    justifyContent:'center',
    position:'absolute',
});
export const Marker = styled(View,{
    backgroundColor:'#000',
    borderRightWidth:2,
    height: 60,
    position:'absolute',
    top: 24,
});
export const Fade = styled(View,{
    backgroundColor:'#fff',
    height:90,
    position:'absolute',
    opacity:0.6,
})
export const Stroke = styled(View,{
    borderBottomColor:'#000',
    borderBottomWidth:2,
    top:-45,
})
export const ArrowNavigation = styled(View,{
    flexDirection:'row',
    marginTop:8,
    marginBottom:8,
    width: '80%',
    justifyContent:'space-between'
})
export const ArrowText = styled(Text,{
    fontSize:16,
    marginLeft:8,
    marginRight:8
})
export const ScrollContainer = styled(View,{
    width:'80%',
    flexWrap:'wrap',
    flexDirection:'column',
    marginBottom:64
})
export const Container = styled(View,{
    width:80
})
export const Months = styled(View,{
    marginBottom:16,
    top:-35
})
