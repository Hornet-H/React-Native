//import liraries
import React, { Component } from 'react'
import { Image } from 'react-native'

// create a component
class TabBarItem extends Component {
    constructor(props){
        super(props);

    }


    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <Image
                source={this.props.focused
                    ? selectedImage
                    : this.props.normalImage}
                style={{ tintColor: this.props.focused ? this.props.tintColor:'gray', width: 20, height: 20 }}
            />
        );
    }
}

//make this component available to the app
export default TabBarItem;
