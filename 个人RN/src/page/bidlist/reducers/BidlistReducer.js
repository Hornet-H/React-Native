import * as types from "./ActionTypes";

const initialState = {
    dataSource: [],
    isRefresh: false,
};

// 导出ShiTuReducer。
export default function BidlistReducer(state = initialState, action) {
    // console.log(action);
    console.log(state);
    // 通过switch来判断types的值，在action中实现功能
    switch (action.type) {
        // 当type=USER_TOKEN_SUCCESS时，会将action中的值，
        // 赋给userToken，在ShiTu.js中就能拿到userToken的值。
        case types.BIDLIST_DATA_SUCCESS:
            // console.log(action);
            return Object.assign({}, state, {
                ...state,
                isRefresh: false,
                dataSource: action.bidList
            });
        case types.BIDLIST_DATA_FREFRESHING:
            // console.log(action);
            return Object.assign({}, state, {
                ...state,
                isRefresh: true,
            });
        default:
            return state;
    }
}



