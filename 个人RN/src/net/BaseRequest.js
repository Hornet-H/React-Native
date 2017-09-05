/**
 * Created by leo on 17/2/21.
 */
/**
 * @author YASIN
 * @version [Android YASIN V01, ]
 * @blog http://blog.csdn.net/vv_bug
 * @description
 */
import {AppVersion, SUCCESS_CODE, BASE_URL} from '../constant/AppConstant'
import TimerMiXin from 'react-timer-mixin'
import Snackbar from 'react-native-snackbar';

export default class BaseRequest {
    // 构造
    constructor(body, method) {
        this.isCancled = false;
        if (body === null) {
            body = {};
        }
        Object.assign(body, {
            version: AppVersion
        });
        if (method === null || (method !== 'GET' || method !== 'POST')) {
            method = 'POST';
        }
        this.body = JSON.stringify(body);

        this.method = method;
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }

    requestUrl() {
        throw ({message: 'function requestUrl must be overrided!'});
    }


    async start(successCallBack, failCallBack) {
        try {
            let url = BASE_URL + this.requestUrl();
            let response = await fetch(url, {
                headers: this.method === 'GET' ? null : this.headers,
                method: this.method,
                body: this.method === 'GET' ? null : this.body,
                timeout: 10
            });
            let responseJson = await response.json();
            if (responseJson && !this.isCancled) {
                this.handleResponse(responseJson, successCallBack);
            } else {
                if (failCallBack && !this.isCancled) failCallBack('请求失败');
            }
        } catch (erro) {
            console.log('catch-->' + erro);
            if (!this.isCancled) this.showSnackBar('网络异常' + erro);
            if (failCallBack && !this.isCancled) failCallBack('网络异常');
        }
    }

    handleResponse(responseJson, successCallBack) {
        if (SUCCESS_CODE === responseJson.code) {
            if (successCallBack) successCallBack(responseJson);
        } else if (responseJson.message && responseJson.message.length > 0) {
            this.showSnackBar(responseJson.message);
        }
    }

    showSnackBar(text) {
        Snackbar.show(text)
    }

    isCancle() {
        return this.isCancled;
    }

    setCancled(cancle) {
        this.isCancled = cancle;
    }
}