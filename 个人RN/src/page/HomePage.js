import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image, ScrollView} from "react-native";
import Swiper from 'react-native-swiper';
import ViewUtils from "../util/ViewUtils";
import color from '../constant/color';
import * as Progress from 'react-native-progress';
import Home_Test from './home_test/Home_Test'
export default class Homepage extends Component {
    bannerHeight = ViewUtils.getHeight() * 0.32;

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
            <View style={styles.container}>
                <Text
                    style={styles.nextbtn}
                    onPress={()=>{
                        this.props.navigation.navigate({routeName:'Home_Test'},{name:'支付成功'});

                    }}
                >确定支付</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    nextbtn: {
        backgroundColor:'gray',
        color:'#000000',
        fontSize: 30,//注意size需要大写否则会报错


    }

});