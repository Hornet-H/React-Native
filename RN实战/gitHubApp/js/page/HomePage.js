/**
 * Created by huanglaifeng on 2017/9/4.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,


} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // selectedTab: 'tb_popular',
        }

    }

    render() {
        return (
            <View style={styles.container}>
                /*<TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_popular'}
                    selectedTitleStyle={{color:'red'}}
                    title="最热"
                    renderIcon={() => <Image source={require('../../res/images/ic_polular.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]}
                                                     source={require('../../res/images/ic_polular.png')}/>}
                    onPress={() => this.setState({selectedTab: 'tb_popular'})}>
                    <View style={{backgroundColor:'red',flex:1}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_trending'}
                    selectedTitleStyle={{color:'red'}}
                    title="趋势"
                    renderIcon={() => <Image source={require('../../res/images/ic_trending.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'yellow'}]}
                                                     source={require('../../res/images/ic_trending.png')}/>}
                    onPress={() => this.setState({selectedTab: 'tb_trending'})}>
                    <View style={{backgroundColor:'red',flex:1}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_favorite'}
                    selectedTitleStyle={{color:'red'}}
                    title="收藏"
                    renderIcon={() => <Image source={require('../../res/images/ic_favorite.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'green'}]}
                                                     source={require('../../res/images/ic_favorite.png')}/>}
                    onPress={() => this.setState({selectedTab: 'tb_favorite'})}>
                    <View style={{backgroundColor:'red',flex:1}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_my'}
                    selectedTitleStyle={{color:'red'}}
                    title="我的"
                    renderIcon={() => <Image source={require('../../res/images/ic_my.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'blue'}]}
                                                     source={require('../../res/images/ic_my.png')}/>}
                    onPress={() => this.setState({selectedTab: 'tb_my'})}>
                    <View style={{backgroundColor:'red',flex:1}}></View>
                </TabNavigator.Item>
            </TabNavigator>*/


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        width:22,
        height:22
    }
});

