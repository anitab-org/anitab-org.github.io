import React from 'react';
import { StyleSheet, View} from 'react-native';


const ContributionBox = ({ props }) => {
    var hue = 0;
    switch (true) {
        
        case (props < 2):
            hue = .4;
            break;
        case (props >=2 && props < 4):
            hue = .6;
            break;
        case (props >=4 && props < 8):
            hue = .7;
            break;
        case (props >=8 && props < 12):
            hue = .9;
            break;
        case (props >=12 ):
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