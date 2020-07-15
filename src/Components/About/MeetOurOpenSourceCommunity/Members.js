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
import content from './data.json';


export default class Members extends Component {

    constructor() {
        super();
        this.state = { screenWidth: "" }
    }

    getScreenSize = () => {
        const screenWidth = Math.round(Dimensions.get('window').width);
        this.setState({ screenWidth: screenWidth })
    }

    //These are the list of members on Anitab.org GitHub page. I have't added a function or all members because the members aren't fixed yet.

    componentDidMount() {
        var that = this;
        let items = content.data;

        that.setState({
            dataSource: items,
        });
    }


    render() {
        return (
            <View>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.dataSource}
                    initialNumToRender={50}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, margin: '0.125em' }}>
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
                <View style={styles.lineStyle} />
            </View>
        );
    }
}
