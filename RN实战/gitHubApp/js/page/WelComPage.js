/**
 * Created by huanglaifeng on 2017/9/4.
 */
import React ,{ Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from  'react-native'
import HomePage from './HomePage'
import { Navigator } from 'react-native-deprecated-custom-components';

export default class WelComePage extends Component{
    constructor(props){
        super(props);
        this.state={


        }
    }

    componentDidMount() {
        this.timer=setTimeout(()=>{
            navigator.resetTo({
                component:HomePage,
                name:'HomePage'
            })
        },2000)
    }

    componentWillUnmount() {
        this.timer&&clearTimeout(this.timer);
    }
    render(){
        return (
            <View style={styles.container}>
                <Navigator
                    title={'欢迎'}
                />
                <Text>欢迎</Text>
            </View>)
    }


}
const styles=StyleSheet.create({
    container: {
        flex: 1
    }
})