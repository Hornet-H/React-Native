import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image, ScrollView} from "react-native";
;

export default class MyPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true
            })
        }, 0)
    }

    render() {
        return (
            <View>
                <Text>MyPage</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

});