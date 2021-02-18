import React from 'react';
import { StyleSheet, View} from 'react-native';


const ContributionBox = ({ commitCount }) => {
    var hue = 0;
    if(commitCount < 2) {
        hue = .4;
    } else if (commitCount >=2 && commitCount < 4) {
        hue = .6;
    } else if (commitCount >=4 && commitCount < 8 ) {
        hue = .7;
    } else if (commitCount >=8 && commitCount < 12) {
        hue = .9;
    } else {
        hue = 1;
    }
        
    var colorCode = 'rgba(0, 113, 188,' + hue + ')';
    return (
        <View style={[style.box, {backgroundColor: colorCode}]}/>
    );
};

const style = StyleSheet.create({
    box: {
        width: 20,
        height: 20,
        margin: 2.5, 
    }
});

export default ContributionBox;
