// Reducer是纯函数，里面不应该有过多的逻辑。
import {combineReducers} from 'redux';
// 这个是ShiTu页面中用到的Reducer
import BidlistReducer from '../../../page/bidlist/reducers/BidlistReducer';
// 下面这个还未实现
// import GankReducer from './GankReducer';
// 取决于这里你加入了多少 reducer
const RootReducer = combineReducers({
    BidlistReducer,
});
export default RootReducer;

