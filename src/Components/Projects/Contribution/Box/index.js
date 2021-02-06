import React from 'react';
import { StyleSheet, View} from 'react-native';


const ContributionBox = ({ commitCount }) => {
    var hue = 0;
    switch (true) {
        
        case (commitCount < 2):
            hue = .4;
            break;
        case (commitCount >=2 && commitCount < 4):
            hue = .6;
            break;
        case (commitCount >=4 && commitCount < 8):
            hue = .7;
            break;
        case (commitCount >=8 && commitCount < 12):
            hue = .9;
            break;
        case (commitCount >=12 ):
            hue = 1;
            break;
        default :
            hue = 0;
            break;    
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