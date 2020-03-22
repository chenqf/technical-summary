/**
 * 节流--一段时间执行多次
 */

const throttle = function (fn, wait = 50) {
    let preTime = 0;
    return function (...args) {
        let now = new Date();
        if (now - pre >= wait) {
            preTime = now;
            return fn.apply(this, args);
        }
    }
}

const throttle = function (fn, wait) {
    let timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null;
            }, wait);
        }
    }
}


// trailing leading 不可同时为false
const throttle = function (fn, wait, leading = true, trailing = true) {
    let timer = null;
    let preTime = 0;
    return function (...args) {
        let now = Date.now();
        if (!trailing && !preTime) {
            preTime = now;
        }
        if (now - preTime >= wait) {
            clearTimeout(timer);
            timer = null;
            fn.apply(this, args);
            preTime = now;
        } else if (!timer && trailing) {
            timer = setTimeout(() => {
                preTime = Date.now();
                timer = null;
                fn.apply(this, args);
            }, wait - now + preTime);
        }
    }
}