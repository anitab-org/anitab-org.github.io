import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ActivityIndicator,
    Image,
    Linking,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import styles from './styles';
import { Dimensions } from "react-native";
import content from './Data/index.json';



//import all the components we will need

export default class Members extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: {},
        };
    }
    constructor2() {
        //super();
        this.state = { screenWidth: "" }
    }
    getScreenSize = () => {
        const screenWidth = Math.round(Dimensions.get('window').width);
        this.setState({ screenWidth: screenWidth })
    }
    componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(25)).map((v, i) => {
            return { id: i, src: 'https://avatars1.githubusercontent.com/u/42520146?s=400&u=a64745b8570c25a709ec1bcb08fba621732ee017&v=4'/*`./images/${i + 1}.jpg`*/ };
        });
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
                                onPress={() => Linking.openURL('https://anitab.org/about-us/about-anita-borg/')}
                            >
                                <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                            </TouchableHighlight>

                        </View>
                    )}
                    //Setting the number of column
                    //numColumns={20}

                    //numColumns={this.state.screenWidth / 61}

                    keyExtractor={item => item.id/*(item, index) => index.toString()*/}
                />
            </View>
        );
    }
}


