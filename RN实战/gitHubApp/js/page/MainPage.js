import React from 'react';
import {StyleSheet} from 'react-native';
import {TabBarBottom, TabNavigator} from 'react-navigation';
import TabBarItem from '../widget/TabBarItem';
import HomePage from './HomePage';
import TrendingPage from '../trending/TrendingPage';
import FavoritePage from '../favorite/FavoritePage'
import MyPage from '../my/MyPage'

export const Tabs = TabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused, titleColor}) => (
                <TabBarItem
                    focuesd={focused}
                    normalImage={require('../../res/images/ic_polular.png')}
                    selectedImage={require('../../res/images/ic_polular.png')}
                />
            ),
            header: null,
        })


    }, Trending: {
        screen: TrendingPage,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused, titleColor}) => (
                <TabBarItem
                    focuesd={focused}
                    normalImage={require('../../res/images/ic_trending.png')}
                    selectedImage={require('../../res/images/ic_trending.png')}
                />
            ),
            header: null,
        })


    }, Favorite: {
        screen: FavoritePage,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused, titleColor}) => (
                <TabBarItem
                    focuesd={focused}
                    normalImage={require('../../res/images/ic_favorite.png')}
                    selectedImage={require('../../res/images/ic_favorite.png')}
                />
            ),
            header: null,
        })


    }, My: {
        screen: MyPage,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused, titleColor}) => (
                <TabBarItem
                    focuesd={focused}
                    normalImage={require('../../res/images/ic_my.png')}
                    selectedImage={require('../../res/images/ic_my.png')}
                />
            ),
            header: null,
        })


    },


}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: true,
        // activeTintColor:null,
        // inactiveTintColor:null,
        style: {backgroundColor: '#ffffff'},
    },
    initialRouteName:'Home'
})
const styles=StyleSheet.create({});