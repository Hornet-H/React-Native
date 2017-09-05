// 获取actionType中的全部状态，需要哪个就用哪个
import * as types from '../reducers/ActionTypes';
// 网络请求的网址和网络请求的方法
import ServerUtils from "../../../util/ServerUtils";

// 这个方法是请求网络，获取Token的方法


// 识兔中调用这个方法之后，需要判断是否存在userToken，不存在请求网络并保存，存在直接调用返回
export function bidList(params) {
    return dispatch => {
        dispatch(refresh());
        ServerUtils.get('bid/lists', params, (data) => {
            dispatch(getBidList(data.data.list, params.type))
        }, (err) => {
            dispatch({type: types.BIDLIST_DATA_ERROR, error: err});
        });
    }
}

// 如果()括号里面的参数`bidList`和Reducer里面的初始参数一样，就可以不用键：值的写法，直接返回就好。
export function getBidList(bidList, TAG) {
    return {
        type: types.BIDLIST_DATA_SUCCESS,
        bidList,
        TAG
    }
}

export function refresh() {
    return {
        type: types.BIDLIST_DATA_FREFRESHING
    }
}