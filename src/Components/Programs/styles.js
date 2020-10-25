import { View, Text ,ScrollView} from 'react-native';
import { styled } from 'react-native-reflect';
export const Event = styled(Text,{
    color:"#ffdd30",
    fontWeight: 400,
    fontSize: 24,
    borderColor: '#ffdd30',
    borderWidth: 0.5,
    paddingVertical:5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 3,
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
    borderBottomColor:'#ffdd30',
    color:'#ffdd30',
    position:'relative',
    top: '21px',
    left: '20%',
    zIndex: '-10px'
});
export const Date = styled(View,{
    backgroundColor:'#ffdd30',
    color:'#fff',
    fontSize:24,
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
    height: '50px',
    position:'absolute',
    top: '29px',
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
    width:'40vw',
    top:'-35px',
})
export const ArrowNavigation = styled(View,{
    flexDirection:'row',
    marginTop:'10px',
    marginBottom:'10px',
    width:'80%',
    justifyContent:'space-between'
})
export const ArrowText = styled(Text,{
    fontSize:'16px',
    marginLeft:'5px'
})
export const ScrollContainer = styled(View,{
    width:'80%',
    flexWrap:'wrap',
    flexDirection:'column',
    marginBottom:'10vw'
})
export const ScrollMain = styled(ScrollView,{
    flexDirection:'column',
    width:'70%',
    position:'absolute',
    right:'0',
    top:'-3px'
})
export const Container = styled(View,{
    width:'80%'
})
export const Months = styled(View,{
    marginBottom:'15px',
    top:'-35px'
})
