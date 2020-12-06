import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContributionBox from './Box';

class ContributionRow extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {data: null}       
    }
    componentDidMount(){     
        const endpoint = this.props.po.link;
        const headers = {
            "Authorization" : 'Token 24070df2fd1199cd2ff3e82b8f1f17735e63cbb7'
        }
        fetch(endpoint, {
            "method" :"GET",
            "headers" : headers
        })
        .then((resp) => resp.json())
        .then((js) => this.setState({data: js}));
    }
    render() {
        var Contributionrow = [];
        const take = () =>{
            Contributionrow.push(<Text style={styles.desc}>{this.props.po.name}</Text>);
            var week = 0;
            var days =0;
            while (true) {
                for (var i=6;i>=0;i--)
                {
                    Contributionrow.push( 
                        <ContributionBox props={this.state.data[51-week].days[i]} />
                        );
                    days++;
                    if(days>=30)break;
                }
                week++;
                if(days>=30)break; 
            }
            return null;
        }
        return (
            <View>
                {this.state.data === null ?
                    <Text style={styles.desc}>loading...</Text>
                :    
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
                >
                    {take()}
                    {Contributionrow}
                </View>
                }
            </View>      
        );
    }
};

const styles = StyleSheet.create({
    desc: {
        color: '#0071BC',
        fontSize: 16,
        fontWeight: '400',
        width: 190,
        margin:5,
    },
    box: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    }
})

export default ContributionRow;