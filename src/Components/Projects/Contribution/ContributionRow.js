import React ,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContributionBox from './Box';

function ContributionRow ({...props}) {
     let [data ,setData] = useState(null);
    React.useEffect( () => {
        const endpoint = props.detail.link;
        const headers = {
            "Authorization" : process.env.ACCESS_TOKEN
        }
        fetch(endpoint, {
            "method" :"GET",
            "headers" : headers
        })
        .then((resp) => resp.json())
        .then((obj) => {
            setData( obj) ;
        });
    }, [])
        let Contributionrow = [];
        const reponame = props.detail.name;
        const take = () =>{
            Contributionrow.push(<Text key={0} style={styles.desc}>{reponame}</Text>);
            let week = 0;
            let days =0;
            while (true) {
                for (let i=6;i>=0;i--)
                {
                    Contributionrow.push( 
                        <ContributionBox key={days+1} props={data[51-week].days[i]} />
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
                {data === null ?
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
    //}
};

const styles = StyleSheet.create({
    desc: {
        color: '#0071BC',
        fontSize: 16,
        fontWeight: '400',
        width: 190,
        margin:4,
    },
    box: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    }
})

export default ContributionRow;