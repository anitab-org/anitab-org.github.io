import { View, Text ,ScrollView} from 'react-native';
import { styled } from 'react-native-reflect';
export const Event = styled(Text,{
    fontSize: 24,
    borderWidth: 0.5,
    paddingVertical:4,
    paddingHorizontal: 8,
    marginBottom: 4,
    borderRadius: '50px',
    textAlign: 'center',
    zIndex:'1px',
    position:'relative',
    backgroundColor:'#fff',
    width:'200px'
});
export const Line = styled(View,{
    width:'200vw',
    borderBottomWidth:10,
    marginBottom:4,
    position:'relative',
    top: '18px',
    left: '20%',
});
export const Date = styled(View,{
    backgroundColor:'#ffdd30',
    color:'#fff',
    fontSize:20,
    width:45,
    height:45,
    borderRadius: '50px',
    textAlign: 'center',
    justifyContent:'center',
    position:'absolute',
});
export const Marker = styled(View,{
    backgroundColor:'#000',
    width:'2px',
    height: '60px',
    position:'absolute',
    top: '28px',
    zIndex:'-1px'
});
export const Fade = styled(View,{
    backgroundColor:'#fff',
    height:'90px',
    position:'absolute',
    opacity:'0.6',
})
export const Stroke = styled(View,{
    borderBottomColor:'#000',
    borderBottomWidth:'2px',
    width:'50vw',
    top:'-45px',
})
export const ArrowNavigation = styled(View,{
    flexDirection:'row',
    marginTop:'8px',
    marginBottom:'8px',
    width:'80%',
    justifyContent:'space-between'
})
export const ArrowText = styled(Text,{
    fontSize:'16px',
    marginLeft:'8px',
    marginRight:'8px'
})
export const ScrollContainer = styled(View,{
    width:'80%',
    flexWrap:'wrap',
    flexDirection:'column',
    marginBottom:'64px'
})
export const ScrollMain = styled(ScrollView,{
    flexDirection:'column',
    width:'65%',
    position:'absolute',
    right:'0',
})
export const Container = styled(View,{
    width:'80%'
})
export const Months = styled(View,{
    marginBottom:'16px',
    top:'-35px'
})
