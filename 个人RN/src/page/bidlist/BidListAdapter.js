import React from 'react';
import {Animated, FlatList, RefreshControl, Text, View} from "react-native";
import ViewUtils from "../../util/ViewUtils";
import {toastShort} from "../../util/ToastUtils";
import DateUtils from "../../util/DateUtils";
import BaseComponent from '../../base/BaseComponent'
// 引入connect和bindActionCreators
import color from "../../constant/color";
import ServerUtils from "../../util/ServerUtils";
import BidListItem from "./BidListItem";

let AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class BidListAdapter extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isRefresh: false,
        }
    }

    fetchBidListData() {
        let params = {
            type: this.props.type,
            time: DateUtils.getTimeStamp(),
        };
        this.setState(Object.assign(this.state, {
            isRefresh: true
        }));
        ServerUtils.get('bid/lists', params, (data) => {
            this.setState({
                dataSource: data.data.list,
                isRefresh: false
            });
        }, (err) => {
            this.setState(Object.assign(this.state, {
                isRefresh: false
            }));
        });
    }

    componentDidMount() {
        this.fetchBidListData()
    }

    renderItem = (item) => {
        const {navigate} = this.props;
        return (
            // GankItem(navigate,item)
            <BidListItem navigate={navigate} itemData={item} itemPress={() => this.itemPress(item)}/>
        )
    };
    itemPress = (item) => {
        toastShort(item.name);
        const {navigate} = this.props;
        /*InteractionManager.runAfterInteractions(() => {
            navigate('WebViewDetail', {
                data: item.url,
                isVisible: true
            });
        });*/
    };

    separatorComponent() {
        return (
            <View style={{height: 10, flex: 1, backgroundColor: color.divider_color}}/>
        )
    }

    footerComponent() {
        return (
            <View style={{backgroundColor: color.divider_color}}>
                <Text style={{color: color.titleColor, marginTop: 15, fontSize: 15, alignSelf: 'center'}}>查看更多标的请登录
                    www.hexindai.com</Text>
                <Text style={{
                    color: color.hintTextColor,
                    marginTop: 15,
                    marginBottom: 15,
                    fontSize: 12,
                    alignSelf: 'center'
                }}>引入保险机制,市场有风险,入市需谨慎</Text>
            </View>
        )
    }

    render() {
        return (
            <AnimatedFlatList
                style={{backgroundColor: color.background}}
                ListHeaderComponent={this.separatorComponent}
                ItemSeparatorComponent={this.separatorComponent}
                ListFooterComponent={this.footerComponent}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                // refreshing={this.props.BidlistReducer.isRefresh}
                // onRefresh={() => this.fetchBidListData()}
                data={this.state.dataSource}
                renderItem={({item}) => this.renderItem(item)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefresh}
                        onRefresh={() => this.fetchBidListData()}
                        colors={color.refreshColors}
                        title="下拉刷新"
                        tintColor={color.theme}
                        titleColor={color.theme}
                    />
                }
            />
        );
    }


}
