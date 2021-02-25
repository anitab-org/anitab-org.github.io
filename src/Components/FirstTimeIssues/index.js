import React, { Component } from 'react';
import { Text, View ,FlatList} from 'react-native';
import SectionHeader from '../SectionHeader';
import {TableHeader,TableHeaderText} from './style';
import {CheckOutlined,InfoCircleOutlined,CaretDownOutlined} from '@ant-design/icons'
export default class App extends Component {
    state={};
  componentDidMount() {
    var repos=[],issues=[];
    fetch('https://api.github.com/orgs/anitab-org/repos')
    .then((response)=>response.json())
    .then((json)=> json.forEach(function(repo,idx){
        repos.push(repo.name);
        fetch('https://api.github.com/repos/anitab-org/'+repo.name+'/issues')
        .then((response)=>response.json())
        .then((json)=>json.forEach(function(issue,idx){
            var flag=false;
            var issue_tmp={
                url:issue.html_url,
                title:issue.title,
                milestones:issue.milestones,
                comments:issue.comments,
                number:issue.number,
                assignees:issue.assignees,
                labels:[],
            };
            issue.labels.forEach(function(label){
                if(label.name==="First Timers Only")
                    flag=true;
                issue_tmp.labels.push({
                    id:label.id,
                    name:label.name,
                    color:label.color
                })
            })
            if(flag===true && issue_tmp!=null)
                issues.push(issue_tmp)
        }));
    }))
    .then(
        this.setState({repos:issues}),
        // console.log(this.state)
    )
  }
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