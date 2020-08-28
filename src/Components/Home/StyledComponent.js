import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
 
const {width, height} = Dimensions.get('window');

  const Container = styled.View`
  @media (width : 800){
      width: 100;
  }
`;

  const Verticle=styled.View`
  display:flex;
    flex-direction: column;
    // width: width
`;
  const ImageEven = styled.View`
{ 
  align-items: center; 
  padding-left:32;
  margin-right: 32;
  margin-top: 32;
  align-self: center
  `;
  const ContentEven = styled.View` 
{
  width: width;
    width: 1000;
    // padding-right: (width>height) ? 32 : 0;
    margin-top: 32;
`;
  const ImageOdd = styled.View`
  padding-right: 32;
  margin-left: 32;
  margin-top: 32;
//   width: width * 0.19;
  alignself:center;
  `;
  const ContentOdd= styled.View` 
//   width: (width>height) ? width * 0.7 : width*0.85;
    width: 1000;
  margin-top: 32;
//   padding-left: (width>height) ? 32 : 0;
`;

  const Heading = styled.Text`
  font-size: 24;
  font-weight: 500;
//   font-family:./../../Avenir-Medium;
  color: #103BB1;
  `;
  const Description = styled.Text`
  marginTop:8;
  fontSize: 18;
  color: #103BB1;
//   font-family:./../../Avenir-Light;
  text-align:left;
  flex-wrap:wrap;
  `;

  export {Container, 
    Verticle, ImageEven, ImageOdd, ContentEven, ContentOdd, Heading, Description};