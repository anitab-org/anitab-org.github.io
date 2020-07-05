import React, { Component } from 'react';
import {
    View,
    FlatList,
    Image,
    Linking,
    TouchableHighlight,
} from 'react-native';
import styles from './styles';
import { Dimensions } from "react-native";
import Data from './Data.js';


//import all the components we will need

export default class Members extends Component {

    constructor() {
        super();
        this.state = { screenWidth: "" }
    }

    getScreenSize = () => {
        const screenWidth = Math.round(Dimensions.get('window').width);
        this.setState({ screenWidth: screenWidth })
    }
    componentDidMount() {
        var that = this;
        let items = [
            {
                profile: "https://github.com/aayush-05",
                image: "https://avatars1.githubusercontent.com/u/47032027?s=96&v=4"
            },
            {
                profile: "https://github.com/Abdelaty",
                image: "https://avatars0.githubusercontent.com/u/23483020?s=96&v=4"
            },
            {
                profile: "https://github.com/adi-001",
                image: "https://avatars3.githubusercontent.com/u/47720423?s=96&v=4"
            },
            {
                profile: "https://github.com/aditmehta9",
                image: "https://avatars2.githubusercontent.com/u/35133994?s=96&v=4"
            }
        ];

        that.setState({
            dataSource: items,
        });
    }


    render() {


        return (
            <View style={styles.MainContainer}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, margin: 2 }}>
                            <TouchableHighlight
                                style={styles.link}
                                underlayColor='transparent'
                                accessible={true}
                                onPress={() => Linking.openURL(item.profile)}
                            >
                                <Image style={styles.imageThumbnail} source={item.image} />
                            </TouchableHighlight>

                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}
