import Toast from 'react-native-root-toast'

let toast;
export const toastShort = (content) => {
    if (toast !== undefined) {
        Toast.hide(toast)
    }
    toast = Toast.show(content.toString(), {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        animate: true,
        hideOnPress: true,
        delay: 0,
        shadow:true
    })
};