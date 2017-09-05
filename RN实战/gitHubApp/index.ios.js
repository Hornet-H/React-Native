/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


export var FLAG_TAB = {
    flag_popularTab: 'flag_popularTab', flag_trendingTab: 'flag_trendingTab',
    flag_favoriteTab: 'flag_favoriteTab', flag_myTab: 'flag_myTab'
}
export default class gitHubApp extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'home',
        }

    }
    _renderTab(Component, selectedTab, title, renderIcon) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle={this.state.theme.styles.selectedTitleStyle}
                renderIcon={() => <Image style={styles.tabBarIcon}
                                         source={renderIcon}/>}
                renderSelectedIcon={() => <Image
                    style={[styles.tabBarSelectedIcon, this.state.theme.styles.tabBarSelectedIcon]}
                    source={renderIcon}/>}
                onPress={() => this.onSelected(selectedTab)}>
                <Component {...this.props} theme={this.state.theme} homeComponent={this}/>
            </TabNavigator.Item>
        )
    }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home"
              renderIcon={() => <Image  source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image source={require('./res/images/ic_polular.png')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'home' })}>
              <View style={styles.homePage}></View>
          </TabNavigator.Item>
            {/*{this._renderTab(PopularPage, FLAG_TAB.flag_popularTab, 'Popular', require('./res/images/ic_polular.png'))}*/}
          <TabNavigator.Item
              selected={this.state.selectedTab === 'profile'}
              title="Profile"
              renderIcon={() => <Image source={require('./res/Image/HFTabbbar/shouye.png')} />}
              renderSelectedIcon={() => <Image source={require('./res/Image/HFTabbbar/shouye_xuanzhong.png')} />}

              onPress={() => this.setState({ selectedTab: 'profile' })}>
              <View style={styles.chujiePage}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
    homePage:{
        flex: 1,
        backgroundColor: 'red',
    },
    chujiePage:{
        flex: 1,
        backgroundColor: 'green',
    }

});

AppRegistry.registerComponent('gitHubApp', () => gitHubApp);
