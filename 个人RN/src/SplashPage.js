import React, {Component} from 'react';
import {Text, View} from "react-native";
import {NavigationActions} from 'react-navigation'

export default class SplashPage extends Component {
    constructor(props) {
        super();
        setTimeout(() => {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Main'})
                ]
            });
            this.props.navigation.dispatch(resetAction)

        }, 500)
    }

    static navigationOptions = {
        headerTitle: 'Welcome',
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;
        return <Text>Hello, Navigation!</Text>;
    }
}