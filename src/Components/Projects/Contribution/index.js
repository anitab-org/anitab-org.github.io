import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SectionHeader from './../../SectionHeader';
import ContributionRow from './ContributionRow';
import ContributionBox from './Box';
import { getrepoData } from './../../../content/projects_content';


function Contribution ()  {
    const repoData = getrepoData();
        return (
            <View >
                <SectionHeader title={'Last 30 Days Contribution'} />
                <ScrollView horizontal={true}>
                <View style={{margin: 32}}>
                    {repoData.data.map((repo,index) => (
                        <ContributionRow detail={repo} key={index} />
                        ))
                    }
                <View style={styles.description}>
                   <Text style={styles.text}>Less</Text> 
                   <ContributionBox commitCount={1} />
                   <ContributionBox commitCount={3} />
                   <ContributionBox commitCount={6} />
                   <ContributionBox commitCount={10} />
                   <ContributionBox commitCount={13} />
                   <Text style={styles.text}>More</Text>
                </View>
                </View>
                </ScrollView>
            </View>
        );
    
}

const styles = StyleSheet.create({
    description: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'flex-end',
        
    },
    text: {
        color: '#0071BC',
        fontSize: 12,
        fontWeight: '400',
        padding: 4,
    },
});

export default Contribution;