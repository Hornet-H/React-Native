import BaseComponent from "../../base/BaseComponent";
import {Image, Text, TouchableOpacity, View} from "react-native";
import React from 'react';
import {images} from "../../images";
import color from "../../constant/color";
import ViewUtils from "../../util/ViewUtils";
import Button from "apsl-react-native-button";
import {PublicStyle} from "../../constant/PublicStyle";
import * as Progress from 'react-native-progress';

export default class BidListItem extends BaseComponent {


    render() {
        let {itemData} = this.props;
        return (
            <TouchableOpacity style={{marginTop: 10, marginBottom: 24, backgroundColor: color.background}}
                              onPress={this.props.itemPress}
                              activeOpacity={0.7}>
                <View>
                    <View style={{
                        height: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image source={images.common_xinshoubiao_icon} style={{marginLeft: 24,}}/>
                        <Text style={{fontSize: 14, color: '#313131', marginLeft: 14}}>{itemData.name}</Text>
                        {
                            // 是否是新手1
                            itemData.is_novice === '1'
                                ?
                                <Text style={{
                                    fontSize: 12,
                                    color: '#fff',
                                    marginLeft: 10,
                                    width: 68,
                                    backgroundColor: '#e71d36',
                                    borderRadius: 10,
                                    textAlign: "center",
                                    paddingTop: 3,
                                    paddingBottom: 3
                                }}>新手专享</Text>
                                : null
                        }
                        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                            <Text style={[styles.hintTextStyle, {marginRight: 10}]}>22日还款</Text>
                        </View>

                    </View>
                    <View style={{
                        height: ViewUtils.px2dp(1),
                        flex: 1,
                        marginLeft: 14,
                        marginRight: 14,
                        backgroundColor: color.border
                    }}/>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end', marginTop: 20}}>
                        <View style={{flexDirection: 'column', flex: 3, alignItems: 'center'}}>
                            <Text style={[styles.rateLargeTextStyle]}>10<Text
                                style={styles.rateSmallTextStyle}>%</Text>+8<Text
                                style={styles.rateSmallTextStyle}>%</Text></Text>
                            <Text style={[styles.hintTextStyle]}>预期年化收益率</Text>
                        </View>
                        <View style={{flexDirection: 'column', flex: 2, alignItems: 'center'}}>
                            <Text style={{marginBottom: 7, color: color.titleColor}}>36个月</Text>
                            <Text style={[styles.hintTextStyle]}>锁定期限</Text>
                        </View>
                        <View style={{flexDirection: 'column', flex: 3, marginLeft: 20}}>
                            <Button
                                // isLoading={true}
                                activityIndicatorColor={color.theme}
                                style={[PublicStyle.lendButtonStyle, {height: 35, width: 100, borderRadius: 3,}]}
                                textStyle={[PublicStyle.lendButtonTextStyle]}
                                onPress={() => {
                                    console.log('world!')
                                }}>
                                立即加入
                            </Button>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Progress.Bar unfilledColor={'#d1e6f2'} style={{alignSelf: 'center'}}
                                              color={'#4DA0D1'} borderWidth={0} progress={0.3} width={60} height={4}
                                              borderRadius={0}/>
                                <Text style={{
                                    fontSize: 12,
                                    color: '#313131',
                                    paddingLeft: 15
                                }}>99%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: 25,
                        marginRight: 25
                    }}>
                        <View style={{flexDirection: 'column', flex: 3, alignItems: 'flex-start'}}>
                            <Text style={[styles.hintTextStyle]}>锁定期限</Text>
                        </View>
                        <View style={{flexDirection: 'column', flex: 3, alignItems: 'flex-end'}}>
                            <Text style={[styles.hintTextStyle]}>锁定期限</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}
const styles = {
    rateLargeTextStyle: {
        fontSize: 36, color: '#e71d36'
    },
    rateSmallTextStyle: {
        fontSize: 16
    },
    hintTextStyle: {
        fontSize: 12,
        color: color.hintTextColor
    },
    lendButtonStyle: {
        borderColor: '#e71d36',
        backgroundColor: '#e71d36',
        height: 45,
        marginBottom: 15,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 19
    },
    lendButtonTextStyle: {
        color: '#ffffff',
        fontSize: 16
    },
};