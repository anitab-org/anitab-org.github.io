/*import { FlatList, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import React from 'react';
import { Dimensions } from "react-native";
import {
    ContributionGraph
} from "react-native-chart-kit";



function Graph() {
    const screenWidth = Math.round(Dimensions.get('window').width);

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const commitsData = [
        { date: "2017-01-02", count: 1 },
        { date: "2017-01-03", count: 2 },
        { date: "2017-01-04", count: 3 },
        { date: "2017-01-05", count: 4 },
        { date: "2017-01-06", count: 5 },
        { date: "2017-01-30", count: 2 },
        { date: "2017-01-31", count: 3 },
        { date: "2017-03-01", count: 2 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-03-05", count: 2 },
        { date: "2017-02-30", count: 4 }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Last 30 days of Contribution</Text>
            <FlatList
                data={[
                    { key: 'Anitab-org.github.io' },
                    { key: 'Mentorship-backend' },
                    { key: 'Mentorship-android' },
                    { key: 'Mentorship-ios' },
                    { key: 'Portal' },
                    { key: 'Vms' },
                ]}
                renderItem={({ item }) => <Text style={styles.text}>{item.key}</Text>}
            />
            <ContributionGraph
                values={commitsData}
                endDate={new Date("2017-04-01")}
                numDays={105}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    );

};

export default Graph;

*/



