import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image, ScrollView} from "react-native";
import Swiper from 'react-native-swiper';
import ViewUtils from "../util/ViewUtils";
import color from '../constant/color'

export default class AccountPage extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <View>
                <Text>hh2</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: ViewUtils.getWidth(),
        flex: 1
    },
});