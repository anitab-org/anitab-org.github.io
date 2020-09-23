import React from 'react';
import {ScrollView,Text,View } from 'react-native';
import { MainContainer,Event ,Timeline,Line,Date} from './styles';

function Programs() {
  return (
      <>
        <Timeline>
            <Event>GSOC'20</Event>
            <ScrollView horizontal="true">
                    <Line></Line>
                    <Date style={{left:'10vw'}}>33</Date>
                    <Date style={{left:'30vw'}}>33</Date>
                    <Date style={{left:'40vw'}}>33</Date>
                    <Date style={{left:'50vw'}}>33</Date>
            </ScrollView>
        </Timeline>
        {/* <Timeline>
            <Event>Rails Girls's 20</Event>
            <ScrollView horizontal="true">
                    <Line></Line>
                    <Date style={{left:'10vw'}}>33</Date>
                    <Date style={{left:'30vw'}}>33</Date>
                    <Date style={{left:'40vw'}}>33</Date>
                    <Date style={{left:'50vw'}}>33</Date>
            </ScrollView>
        </Timeline> */}
      </>
  );
}

export default Programs;
