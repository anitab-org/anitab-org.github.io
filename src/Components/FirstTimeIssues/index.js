import React, { Component } from 'react';
import { Text, View ,FlatList,Image,Linking,ActivityIndicator,TouchableHighlight} from 'react-native';
import SectionHeader from '../SectionHeader';
import {TableHeader,TableHeaderText,IssueContainer,Labels,IssueItem} from './style';
import {InfoCircleOutlined} from '@ant-design/icons'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          DATA: [],
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
          this.setState({
            repos,
            DATA: DATA.flat(),
            isLoading:false,
            current_state:'open',
          })
          var open=0,closed=0;
          this.state.DATA.forEach((item)=>{
              if(item.state==='open')
                open++;
              else
                closed++;
          })
          this.setState({open,closed});
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
            state:issue.state,
            created_at:issue.created_at,
            closed_at:issue.closed_at,
            closed_by:issue.closed_by,
            opened_by:issue.user.login
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
    if(this.state.isLoading===true){
        return(
            <View style={{width:'80%'}}>
                <SectionHeader title="SOME COOL FIRST-TIME ISSUES TO WORK ON"/>
                <TableHeader>
                    <TableHeaderText style={{flex:10,textAlign:'left',fontWeight:600}}><InfoCircleOutlined /> {this.state.open} Open</TableHeaderText>
                    <TableHeaderText>Assignee</TableHeaderText>
                    <TableHeaderText>Comments</TableHeaderText>
                </TableHeader>
                <IssueContainer style={{justifyContent:'center'}}><ActivityIndicator/></IssueContainer>
            </View>
        )
    }else{
        return (
            <View style={{alignItems: 'left',width:'80%'}}>
                <SectionHeader title="SOME COOL FIRST-TIME ISSUES TO WORK ON"/>
                <TableHeader>
                    <TableHeaderText style={{flex:10,textAlign:'left',fontWeight:600}}><InfoCircleOutlined /> {this.state.open} Open</TableHeaderText>
                    <TableHeaderText>Assignee</TableHeaderText>
                    <TableHeaderText>Comments</TableHeaderText>
                </TableHeader>
                <FlatList
                    data={this.state.DATA}
                    renderItem={({item})=>(<>
                        {item.state===this.state.current_state  &&
                            <IssueContainer key={item.id}>
                                <View style={{flexDirection:'column',flex:10}}>
                                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                        {
                                            this.state.current_state==='open' &&
                                            <svg className="octicon octicon-issue-opened open" fill="#22863a" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
                                        }
                                        {
                                            this.state.current_state==='closed' &&
                                            <svg className="octicon octicon-issue-closed closed" fill="#cb2431" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M1.5 8a6.5 6.5 0 0110.65-5.003.75.75 0 00.959-1.153 8 8 0 102.592 8.33.75.75 0 10-1.444-.407A6.5 6.5 0 011.5 8zM8 12a1 1 0 100-2 1 1 0 000 2zm0-8a.75.75 0 01.75.75v3.5a.75.75 0 11-1.5 0v-3.5A.75.75 0 018 4zm4.78 4.28l3-3a.75.75 0 00-1.06-1.06l-2.47 2.47-.97-.97a.749.749 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z"></path></svg>                                        }
                                        <TouchableHighlight
                                            activeOpacity={0.5}
                                            underlayColor="#0366d6"
                                        >
                                            <Text
                                                style={{fontWeight:600,fontSize:16}}
                                                onPress={()=>Linking.openURL(item.url)}
                                                > {item.title}
                                            </Text>
                                        </TouchableHighlight>
                                        {item.labels.map((e)=>
                                            <Labels style={{backgroundColor:e.color,borderRadius: 4}} key={e.id}>{e.name}</Labels>
                                        )}
                                    </View>
                                    {
                                        item.state==='open' &&
                                        <Text style={{color:'#586069'}}> #{item.number} opened by {item.opened_by} </Text>
                                    }
                                    {
                                        item.state==='closed' &&
                                        <Text style={{color:'#586069'}}> #{item.number} by {item.opened_by} was closed</Text>
                                    }
                                </View>
                                <IssueItem>
                                    {
                                        item.assignees.length!==0 &&
                                        <Image
                                            source={{uri:item.assignees[0].avatar_url}}
                                            style={{width: 25, height: 25,borderRadius:4}}
                                        />
                                    }
                                </IssueItem>
                                <IssueItem>
                                    { item.comments>0 &&
                                        <>
                                            <svg className="octicon octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1" width="18" height="18" aria-hidden="true"><path fillRule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path></svg>                                
                                            <Text> {item.comments}</Text>
                                        </>
                                    }
                                </IssueItem>
                            </IssueContainer>
                        }</>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            );
        }
    }
};