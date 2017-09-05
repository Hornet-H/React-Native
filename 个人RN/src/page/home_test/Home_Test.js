import React ,{ Component }from 'react';
import { StyleSheet,View,Text, } from 'react-native';
export default class Home_Test extends Component{
    constructor(props){
        super(props);
        this.state={


        }
    }
    render(){
        return(
        <View style={styles.container}>
            <Text
                style={styles.tip}
                onPress={()=>{

                }}
            >你成功了我的爱人</Text>
        </View>
    )}

}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'blue',
    },
    tip:{
        fontSize:30,
        color:'#000000'

    }
})