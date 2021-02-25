import React, { Component } from 'react';
import { Text, View ,FlatList} from 'react-native';
import SectionHeader from '../SectionHeader';
import {TableHeader,TableHeaderText} from './style';
import {CheckOutlined,InfoCircleOutlined,CaretDownOutlined} from '@ant-design/icons'
export default class App extends Component {
//   componentDidMount() {
//     fetch('https://reactnative.dev/movies.json')
//   }
  render() {
    return (
      <View style={{alignItems: 'left',width:'80%'}}>
        <SectionHeader title="SOME COOL FIRST-TIME ISSUES TO WORK ON"/>
        <TableHeader>
            <TableHeaderText style={{color:'#000',textAlign:'left'}}><InfoCircleOutlined /> 5 Open</TableHeaderText>
            <Text style={{flex:6,color:'#586069'}}><CheckOutlined /> 45 Closed</Text>
            <TableHeaderText>Author <CaretDownOutlined /></TableHeaderText>
            <TableHeaderText>Label <CaretDownOutlined /></TableHeaderText>
            <TableHeaderText>Milestone <CaretDownOutlined /></TableHeaderText>
            <TableHeaderText>Assignee <CaretDownOutlined /></TableHeaderText>
            <TableHeaderText>Sort <CaretDownOutlined /></TableHeaderText>
        </TableHeader>

      </View>
    );
  }
};