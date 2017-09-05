import { AppRegistry,View,Text } from 'react-native';
import React, { Component } from 'react';

// 引入react-redux
import {Provider}from 'react-redux';
// 引入store文件，下步会创建
import configureStore from './common/config/store/ConfigureStore';

// 调用 store 文件中的rootReducer常量中保存的方法
const store = configureStore();

// 项目中使用了react-navigation，推荐的做法是将初始文件写在一个文件中，
// 所以App.js也可以看做是页面的初始化入口
import App from './APP';

export default class Root extends Component {
    render() {
        return (
            // 包装App
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
