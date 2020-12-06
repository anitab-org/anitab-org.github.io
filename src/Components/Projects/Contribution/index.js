import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SectionHeader from './../../SectionHeader';
import ContributionRow from './ContributionRow';
import ContributionBox from './Box';

const data  = [
    {
        name :   'Anitab-org.github.io',
        link :  'https://api.github.com/repos/anitab-org/anitab-org.github.io/stats/commit_activity',
    },
    {
        name :   'Mentorship-backend',
        link :  'https://api.github.com/repos/anitab-org/mentorship-backend/stats/commit_activity',
    },
    {
        name :   'Mentorship-android',
        link :  'https://api.github.com/repos/anitab-org/mentorship-android/stats/commit_activity',
    },
    {
        name :   'Mentorship-ios',
        link :  'https://api.github.com/repos/anitab-org/mentorship-ios/stats/commit_activity',
    },
    {
        name :   'Portal',
        link :  'https://api.github.com/repos/anitab-org/portal/stats/commit_activity',
    },
    {
        name :   'Vms',
        link :  'https://api.github.com/repos/anitab-org/vms/stats/commit_activity',
    }
];

class Contribution extends React.Component {
    render() {
        return (
            <View >
                <SectionHeader title={'Last 30 Days Contribution'} />
                <View style={{margin: 32}}>
                    {data.map((repo) => (
                    <ContributionRow po={repo}  />
                    ))
                    }
                <View style={styles.description}>
                   <Text style={styles.text}>Less</Text> 
                   <ContributionBox props={1} />
                   <ContributionBox props={3} />
                   <ContributionBox props={6} />
                   <ContributionBox props={10} />
                   <ContributionBox props={13} />
                   <Text style={styles.text}>More</Text>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'flex-end',
        paddingRight: 480,
    },
    text: {
        color: '#0071BC',
        fontSize: 12,
        fontWeight: '400',
        padding: 5
    },
});

export default Contribution;