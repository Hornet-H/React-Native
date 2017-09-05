import {AppRegistry, View, Text,} from 'react-native';
import React, {Component} from 'react';

import {Provider} from 'react-redux'

import setup from './setup'

export default class Root extends Component {
    render() {
        //   包装App
        return (
        <Provider>
            <setup/>
        </Provider>
    )

    }
}