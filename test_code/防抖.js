/**
 * 防抖---电梯门
 * 搜索:一段时间未输入才请求
 * 按钮:立即请求一段时间未点击,下次点击才算
 */
const debounce = function (fn, wait = 50, immediate) {
    let timer;
    let f = function (...args) {
        timer && clearTimeout(timer);
        if (immediate) {
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (callNow) {
                return fn.apply(this, args);
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, wait);
        }

    }
    f.cancel = () => {
        clearTimeout(timer);
        timer = null;
    }
    return f;
}