import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import ViewUtils from "../../util/ViewUtils";
import color from '../../constant/color'
import {TabBarTop, TabNavigator} from 'react-navigation';
import BidListAdapter from "./BidListAdapter";
import PlatformUtils from "../../util/PlatformUtils";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import BaseComponent from "../../base/BaseComponent";
import {toastShort} from "../../util/ToastUtils";

export default class BidListTabs extends BaseComponent {
    constructor(props) {
        super(props);
        const {navigate} = this.props.navigation;
        this.state = {
            typeArr: [
                {'title': '荷包', 'type': '1', 'navigate': navigate},
                {'title': '月月升息', 'type': '2', 'navigate': navigate},
                {'title': '散标', 'type': '3', 'navigate': navigate},
                {'title': '债权转让', 'type': '4', 'navigate': navigate},
            ],
        }
    }

    _onChangeTab = (i) =>{
        console.log(i);
        toastShort(i.toString())
    };

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <DefaultTabBar tabStyle={{paddingBottom: 0}}/>}
                tabBarActiveTextColor={color.theme}
                tabBarInactiveTextColor={color.titleColor}
                tabBarBackgroundColor='white'
                tabBarTextStyle={{alignItems: 'center', alignSelf: 'center'}}
                onChangeTab={(i) => this._onChangeTab(i)}
                tabBarUnderlineStyle={{
                    backgroundColor: color.theme,
                    height: 2,
                    width: 14,
                    marginBottom: 5,
                    marginLeft: (ViewUtils.px2dp(ViewUtils.getWidth() / 4) - 14) * 2.3,
                    alignItems: 'center',
                    alignSelf: 'center'
                }}
                // onScroll={(e) => this._onScroll(e)}
                // onChangeTab={(i) => this._onChangeTab(i)}
            >
                {
                    this.state.typeArr.map((item, i) => {
                        return (
                            <BidListAdapter key={i}
                                            tabLabel={item.title}
                                            type={item.type}
                                            style={{backgroundColor: 'white', flex: 1}}
                                            navigate={item.navigate}
                            />
                        )

                    })
                }
            </ScrollableTabView>
        )
    }
}
/*
export const BidListTabs = TabNavigator({
    HEBAO: {
        screen: BidListAdapter,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
        }),
    },
    YUEYUESHENGXI: {
        screen: BidListAdapter,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '月月升息',
        }),
    },
    SANBIAO: {
        screen: BidListAdapter,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '散标',
        }),
    },
    ZHAIQUANZHUANRNAG: {
        screen: BidListAdapter,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '债权转让',
        }),
    }
}, {
    // tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    lazy: true,
    swipeEnabled: true,
    tabBarOptions: {
        // showIcon: true,
        activeTintColor: color.theme,
        inactiveTintColor: color.titleColor,
        style: {backgroundColor: color.background, height: 44, marginTop: PlatformUtils.isAndroid() ? 0 : 20},
    }
    ,
    tabBarComponent: (props) => <TabBarTop {...props} indicatorStyle={indicatorStyle(props, 'flex-end')}/>,
    initialRouteName: 'HEBAO'
});

const indicatorWidth = 15;
//妈的 为什么加12我也不知道 我算的然后一比居然少了  谁算谁算吧 我就这样用
const indicatorMargin = ViewUtils.getWidth() / 4.00 - ViewUtils.dp2px(indicatorWidth);
const indicatorStyle = (props, alignSelf) => ({
    backgroundColor: color.theme,
    marginLeft: ViewUtils.px2dp(indicatorMargin) * 2.5,
    marginRight: ViewUtils.px2dp(indicatorMargin) * 2.5,
    width: indicatorWidth,
    height: 2,
    marginBottom: 5,
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,

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
});*/
