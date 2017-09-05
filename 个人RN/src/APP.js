import {addNavigationHelpers} from 'react-navigation';
import StackNavigator from "react-navigation/lib-rn/navigators/StackNavigator";
import React from 'react';
import {connect} from "react-redux";
import SplashPage from "./SplashPage";
import {Tabs} from "./MainPage";


export const MyApp = StackNavigator({
    Home: {screen: SplashPage},
    Main: {screen: Tabs},
}, {
    initialRouteName: 'Main'
});


const MainApp = () => <MyApp/>;


const AppWithNavigationState = ({dispatch, nav}) => (
    <MainApp navigation={addNavigationHelpers({dispatch, state: nav})}/>
);


const mapStateToProps = (state) => ({
    nav: state.nav
});


export default connect(mapStateToProps)(AppWithNavigationState);
