/**
 * Created by zhangruiyu on 2017/3/28.
 */
import {
    Platform,
} from 'react-native'

export default class PlatformUtils {

    static isAndroid() {
        return Platform.OS === 'android';
    }

}

