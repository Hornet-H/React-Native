import React from 'react';
import {StyleSheet} from "react-native";
import {TabBarBottom, TabNavigator} from "react-navigation";
import Homepage from "./page/HomePage";
import TabBarItem from "./widget/TabBarItem";
import TrendingPage from "./page/trending/TrendingPage";
import FavoritePage from './page/favorite/FavoritePage';
import MyPage from './page/my/MyPage';

export const Tabs = TabNavigator({
    Home: {
        screen: Homepage,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '最热',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    // tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/ic_polular.png')}
                    selectedImage={require('./img/tabbar/ic_polular.png')}
                    tintColor="#e71d36"
                />
            ),
            header: null,
        }),
    },
    Trend: {
        screen: TrendingPage,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '趋势',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    // tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/ic_trending.png')}
                    selectedImage={require('./img/tabbar/ic_trending.png')}
                    tintColor="#e71d36"
                />
            ),
            header: null,
        }),
    },
    Favorite: {
        screen: FavoritePage,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '收藏',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    // tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/ic_favorite.png')}
                    selectedImage={require('./img/tabbar/ic_favorite.png')}
                    tintColor="#e71d36"
                />
            ),
            header: null,
        }),
    },
    My: {
        screen: MyPage,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    // tintColor={tintColor}
                    focused={focused}
                    normalImage={require('./img/tabbar/ic_my.png')}
                    selectedImage={require('./img/tabbar/ic_my.png')}
                    tintColor="#e71d36"
                />
            ),
            header: null,
        }),
    },

}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled: true,// 是否可以左右滑动切换tab
    tabBarOptions: {
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        showIcon: true,
        activeTintColor: '#e71d36',// 文字和图片选中颜色
        inactiveTintColor: 'gray',//文字和图片未选中颜色
        style: {backgroundColor: '#ffffff'},
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height: 49//// TabBar 高度
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
    }
    ,
    initialRouteName: 'Home'
});
const styles = StyleSheet.create({});