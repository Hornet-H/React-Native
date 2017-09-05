/**
 * Created by zhangruiyu on 2017/3/28.
 */
import React, {Component} from 'react';
import {Dimensions, PixelRatio, View} from 'react-native'
import Button from "apsl-react-native-button";

const {width, height} = Dimensions.get('window');
export default class ViewUtils extends Component {


    static getPxLine(color, left, right) {
        return (
            <View style={{
                width: ViewUtils.getWidth() - ViewUtils.dp2px(right),
                height: ViewUtils.px2dp(1),
                backgroundColor: color === undefined ? '#e0e0e0' : color,
                marginLeft: left,
            }}/>);
    }

    static getDpLine(length, color) {
        return (
            <View style={{
                width: ViewUtils.getWidth(),
                height: length,
                backgroundColor: color === undefined ? '#f2f2f2' : color
            }}/>
        );
    }
    static getLendButton(text, style, textStyle) {
        return (
            <Button
                style={[styles.lendButtonStyle, style]} textStyle={[styles.lendButtonTextStyle, textStyle]}
                onPress={() => {
                    console.log('world!')
                }}>
                {text}
            </Button>
        );
    }

    static getWidth() {
        return width
    }

    static getHeight() {
        return height
    }
    //传入1获得1px
    static px2dp(length) {
        return length / PixelRatio.get()
    }
    //传入1获得1px
    static dp2px(length) {
        return length * PixelRatio.get()
    }
}

const styles = {
    lendButtonStyle: {
        borderColor: '#e71d36',
        backgroundColor: '#e71d36',
        height: 45,
        marginBottom: 15,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 19
    },
    lendButtonTextStyle: {
        color: '#ffffff',
        fontSize: 16
    },
};

