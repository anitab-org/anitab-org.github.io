import React, { useLayoutEffect, useState } from 'react';
import { useGlobalEvent } from "beautiful-react-hooks";
import styles from './styles';
import { View, Text, Image, Dimensions } from 'react-native';
import contentJson from '../../content/home.json';
// import Styled from './StyledComponent';
import {Container, 
Verticle, ImageEven, ImageOdd, ContentEven, ContentOdd, Heading, Description} from './StyledComponent';


const {width, height} = Dimensions.get('window');
// const { useState } = React;
function Content(){
    // const [width, setWindowWidth] = useState(window.innerWidth);
    // const onWindowResize = useGlobalEvent("resize");

    // onWindowResize((e) => {
    //     //   e.preventDefault();
    //     setWindowWidth(window.innerWidth);
    // });
    return(
        <View style={{marginTop: 32, marginBottom: 32}}>
            {contentJson.sections.map((content, i)=>(
               
                //Images for landscape view
                    <Container style={styles.container}>
                    {(width>800) && (i%2==0) ? 
                    <View style={ (i%2==0) ? styles.imageEven : styles.imageOdd}>
                    <Image
                        style={{ height: content.height, width: content.width }}
                        source={require("./../../assets/home/" + content.image)}
                    />
                    </View> : null}

                    {/* Images for potrait view */}
                    {(width<800) ? <View  style ={styles.imageEven }>
                    <Image
                        style={{ height: content.height, width: content.width }}
                        source={require("./../../assets/home/" + content.image)}
                    />
                    </View> : null}
                    <View key={i} style={(i%2==0) ? styles.contentEven : styles.contentOdd}>
                        <Text style={styles.heading}>{content.title}</Text>
                        {content.content.map((text, j)=>(
                            <Text key={j} style={styles.description}>
                                {text.par}
                            </Text>
                        ))}
                    </View>
                    {(i%2!=0) && (width>800) ? 
                    <View style={ (i%2==0) ? styles.imageEven : styles.imageOdd}>
                    <Image
                        style={{ height: content.height, width: content.width }}
                        source={require("./../../assets/home/" + content.image)}
                    />
                    </View> : null}
                    
                </Container>
            ))}
        </View>
        
    );
}

export default Content;








// function Content(){
//     // const [width, height] = useWindowSize();
//     return(
//         <Verticle style={{marginTop: 32, marginBottom: 32}}>
//             {contentJson.sections.map((content, i)=>(
               
//                 //Images for landscape view
//                     <Container>
//                    <ImageEven>
//                     <Image
//                         style={{ height: content.height, width: content.width }}
//                         source={require("./../../assets/home/" + content.image)}
//                     />
//                     </ImageEven>

//                     <ContentEven>
//                         <Heading>{content.title}</Heading>
//                         {content.content.map((text, j)=>(
//                             <Description key={j} >
//                                 {text.par}
//                             </Description>
//                         ))}
//                     </ContentEven>
                    
//                 </Container>
//             ))}
//         </Verticle>
        
//     );
// }


// const Container = styled.div`
// display:flex;
// flex: 1;
// flex-wrap: wrap;
// justify-content: center;
// flex-direction: row;
// `;

// const Verticle=styled.div`
//     flex-direction: column;
//     // width: width
// `;
// const ImageEven = styled.div`
// { 
//   align-items: center; 
//   padding-left:32;
//   margin-right: 32;
//   margin-top: 32;
//   align-self: center
//   `;
// const ContentEven = styled.div` 
// {
// //   width: (width>height) ? width * 0.7 : width*0.85;
//     width: 1000;
//     // padding-right: (width>height) ? 32 : 0;
//     margin-top: 32;
// `;
// const ImageOdd = styled.div`
//   padding-right: 32;
//   margin-left: 32;
//   margin-top: 32;
// //   width: width * 0.19;
//   alignself:center;
//   `;
// const ContentOdd= styled.div` 
// //   width: (width>height) ? width * 0.7 : width*0.85;
//     width: 1000;
//   margin-top: 32;
// //   padding-left: (width>height) ? 32 : 0;
// `;

// const Heading = styled.text`
//   font-size: 24;
//   font-weight: 500;
//   font-family:./../../Avenir-Medium;
//   color: #103BB1;
//   `;
// const Description = styled.text`
//   marginTop:8;
//   fontSize: 18;
//   color: #103BB1;
//   fontFamily:./../../Avenir-Light;
//   text-align:left;
//   flex-wrap:wrap;
//   `;


// export default Content;