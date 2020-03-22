const debounce = function (fn, wait, immediate) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        if (immediate) {
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (callNow) {
                fn.apply(this, args);
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, wait);
        }
    }
}