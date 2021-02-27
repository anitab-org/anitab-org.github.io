import React, { Component } from 'react';
import { Text, View ,FlatList,Image} from 'react-native';
import SectionHeader from '../SectionHeader';
import {TableHeader,TableHeaderText,IssueContainer,Labels} from './style';
import {CheckOutlined,InfoCircleOutlined,CaretDownOutlined} from '@ant-design/icons'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          DATA: [],
          refresh:false
        };
    }
      async componentDidMount() {
        const repos = [];
        try {
          const response = await fetch('https://api.github.com/orgs/anitab-org/repos');
          const jsonData = await response.json();
          const DATA = await Promise.all(jsonData.map(async ({ name }) => {
            repos.push(name);
            const issuesResponse = await fetch(`https://api.github.com/repos/anitab-org/${name}/issues`);
            const issuesJSON = await issuesResponse.json();
            const repoIssues = issuesJSON.map(this.normalizeIssue);
            return repoIssues.filter(issue => issue !== undefined);
          }))
          // DATA needs to be flat since it's an array of arrays
          this.setState({
            repos,
            DATA: DATA.flat(),
            isLoading:false,
          })
        } catch (error) {
          console.log(error);
        }
      }
      normalizeIssue = (issue) => {
        let flag = false;
        const issueNormalized = {
            id:issue.id.toString(),
            url:issue.html_url,
            title:issue.title,
            milestones:issue.milestone,
            comments:issue.comments,
            number:issue.number,
            assignees:issue.assignees,
            labels:[],
            state:issue.state
        };
        issue.labels.forEach(function(label){
            if(label.name === "First Timers Only") flag = true;
            issueNormalized.labels.push({
                id:label.id,
                name:label.name,
                color:'#'+label.color
            })
        })
        if(flag === true && issueNormalized !== null) return issueNormalized
      }
  render() {
    if(this.state.loading===true)
        return(<></>)
    else{
        {console.log(this.state.DATA)}
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
                <FlatList
                    data={this.state.DATA}
                    renderItem={({item})=>(
                        <IssueContainer key={item.id}>
                            <View style={{flexDirection:'column',flex:9}}>
                                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                    <Text style={{fontWeight:600,fontSize:16}}><InfoCircleOutlined /> {item.title}</Text>
                                    {item.labels.map((e)=>
                                        <Labels style={{backgroundColor:e.color,borderRadius: 4}} key={e.id}>{e.name}</Labels>
                                    )}
                                </View>
                                <Text style={{color:'#586069'}}> #{item.number}</Text>
                            </View>
                            <Text style={{textAlign:'center',flex:1,fontSize:16}}>
                                {item.milestone!=null &&
                                    <>
                                        <svg className="octicon octicon-git-pull-request v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>
                                        {item.milestone}
                                    </>
                                }
                            </Text>
                            <Text style={{textAlign:'center',flex:1,fontSize:16}}>
                                {
                                    item.assignees.length!=0 &&
                                    <Image
                                        source={{uri:item.assignees[0].avatar_url}}
                                        style={{width: 25, height: 25,borderRadius:4}}
                                    />
                                }
                            </Text>
                            <Text style={{textAlign:'center',flex:1,fontSize:16}}>
                                <svg className="octicon octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1" width="18" height="18" aria-hidden="true"><path fillRule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path></svg>                                
                                {item.comments}
                            </Text>
                        </IssueContainer>
                        )}
                    keyExtractor={item => item.id}
                />
            </View>
            );
        }
    }
};