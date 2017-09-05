import RNFetchBlob from 'react-native-fetch-blob'
import {
    Platform,
} from 'react-native'
import {BASE_URL, VISION_NAME} from '../constant/AppConstant'
import UrlUtils from "./UrlUtils";
import {toastShort} from "./ToastUtils";

export default class ServerUtils {
    static getFetchBlob() {
        return RNFetchBlob
            .config({
                'Cache-Control': 'no-store',
                timeout: 15 * 1000,
            })
    }

    static getHeaders() {
        return {
            'Hexindai-Token': '',
            'v': VISION_NAME,
            'os': Platform.OS,
            'User-Agent': 'CreditHe/' + VISION_NAME,

        };
    }

    static get(url, params, successCallBack, failCallBack, fetchBlob = ServerUtils.getFetchBlob(), normalErrClassBack = null) {
        fetchBlob.fetch('GET', UrlUtils.getParams(BASE_URL + url, params), ServerUtils.getHeaders()
        ).then((resp) => {
            if (resp.respInfo.status === 200) {
                let json = resp.json();
                console.log(json);
                //成功后回调
                if (json.ret_code === 0) {
                    successCallBack(json)
                } else {
                    failCallBack(json)
                }
            } else {
                throw resp.respInfo.state
            }
        }).catch((err) => {
            failCallBack(err);
            //普通异常
            if (normalErrClassBack) {
                normalErrClassBack(err)
            }
            toastShort('未知错误' + err.message)
        });
    }
}