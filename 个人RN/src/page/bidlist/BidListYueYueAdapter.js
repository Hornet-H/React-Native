import React, {Component} from 'react';
import {Animated, FlatList, RefreshControl, Text} from "react-native";
import ViewUtils from "../../util/ViewUtils";
import {toastShort} from "../../util/ToastUtils";
import DateUtils from "../../util/DateUtils";
import BaseComponent from '../../base/BaseComponent'
// 引入connect和bindActionCreators
import {connect} from 'react-redux';
import {bidList} from './actions/RefreshBidListAction'
import color from "../../constant/color";

let AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export class BidListAdapter extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            TAG: this.props.type,
            dataSource: [],
            isRefresh: false,
        }
    }

    fetchBidListData() {
        let params = {
            type: this.props.type,
            time: DateUtils.getTimeStamp(),
        };
        this.props.bidList(params)
    }

    componentDidMount() {
        this.fetchBidListData()
    }

    render() {
        return (
            <AnimatedFlatList
                keyExtractor={item => item.id}
                // refreshing={this.props.BidlistReducer.isRefresh}
                // onRefresh={() => this.fetchBidListData()}
                data={this.props.BidlistReducer.dataSource}
                renderItem={({item}) => <Text>{item.name}</Text>}
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.BidlistReducer.isRefresh}
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

    _oppress() {
        toastShort(ViewUtils.getWidth())
    }


}

// connect 连接 Recucer ，我ShiTu.js的Reducer叫ShiTuReducer，
// userToken等方法是我在action里面创建的，所以调用的也就是action方法
export default connect((state) => {
    const {BidlistReducer} = state;
    return {
        BidlistReducer
    };
}, {bidList})(BidListAdapter)