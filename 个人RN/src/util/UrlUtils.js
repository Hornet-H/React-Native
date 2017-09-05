import {toastShort} from "./ToastUtils";

export default class UrlUtils {
    static getParams(url, params) {
        url += "?nothing=";
        if (params) {
            toastShort(typeof(params))
            const paramsBody = Object.keys(params)
                .reduce((a, k) => {
                    a.push(k + "=" + encodeURIComponent(params[k]));
                    return a;
                }, [])
                .join('&');
            url += "&" + paramsBody;
        }
        return url
    }
}