const flat = (array, depth = 1) => {
    while (array.some((item) => Array.isArray(item)) && depth--) {
        array = [].concat(...array);
    }
    return array;
}


class EventBus {
    constructor() {
        this._events = new Map();
    }
    on(key, callback) {
        const handlers = this._events.get(key);
        if (handlers) {
            handlers.push(callback)
        } else {
            this._events.set(key, [callback]);
        }
    }
    emit(key) {
        const handlers = this._events.get(key);
        handlers.forEach(handler => {
            handler.call(this);
        })
    }
    delete(key) {
        this._events.delete(key);
    }
}


const debounce = function (fn, wait = 50, immediate = false) {
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
                return fn.apply(this, args);
            }
        } else {
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this, args);
            }, wait);
        }
    }
}


const throttle = function (fn, wait, leading = true, trailing = true) {
    let timer = null;
    let preTime = 0;
    return function (...args) {
        const now = Date.now();
        if (!leading && !preTime) {
            preTime = now;
        }
        if (now - preTime >= wait) {
            clearTimeout(timer);
            preTime = now;
            return fn.apply(this, args);
        } else if (!timer && trailing) {
            timer = setTimeout(() => {
                clearTimeout(timer);
                preTime = Date.now();
                fn.apply(this, args)
            }, wait - now + preTime);
        }
    }
}


const curry = (fn, len = fn.length) => {
    const _curry = (fn, len, ...params) => {
        return function (...args) {
            const _args = [...params, ...args];
            if (_args.length >= len) {
                return fn.apply(this, _args);
            } else {
                return _curry.call(this, fn, len, ..._args);
            }
        }
    }
    return _curry(fn, len);
}

const clone = obj => {
    const dp = (obj, map) => {
        let result = null;
        if (map.has(obj)) {
            return map.get(obj);
        }
        let type = Object.prototype.toString.call(obj);
        if (type === '[object Array]') {
            result = [];
            map.set(obj, result);
            obj.forEach(item => {
                result.push(dp(item));
            })
        } else if (type === '[object Object]') {
            result = {}
            map.set(obj, result);
            const keys = Object.keys(obj);
            keys.forEach(key => {
                result[key] = obj[key];
            })
        } else if (type === '[object Set]') {
            result = new Set();
            map.set(obj, result);
            obj.forEach(item => {
                result.add(clone(item));
            })
        } else if (type === '[object Map]') {
            result = new Map();
            map.set(obj, result);
            for (let [key, value] of obj) {
                result.set(key, clone(value));
            }
        } else if (type === '[object Date]') {
            result = new Date(obj.getTime())
        } else if (type === '[object RegExp]') {
            let source = obj.source;
            let i = obj.ignoreCase ? 'i' : '';
            let g = obj.global ? 'g' : '';
            let m = obj.multiline ? 'g' : '';
            let str = i + g + m;
            result = new RegExp(source, str);
        } else if (typeof obj === 'object' && type === '[object Number]') {
            result = new Number(Number(obj));
        } else if (obj instanceof HTMLElement) {
            result = obj.cloneNode(true); // 携带属性 true 携带子节点
        }
        return result;
    }


}



// HashRouter  hashchange

// HistoryRouter 
// 重写 pushState replaceState
// 拦截 popstate
// 拦截 a 连接


const isPlainObject = obj => {
    let prop = obj;
    while (Object.getPrototypeOf(prop) !== null) {
        prop = Object.getPrototypeOf(obj);
    }
    return prop === Object.getPrototypeOf(obj);
}

const A = Object.create(null);
const B = Object.create(A);
console.log(isPlainObject(B));

const shunt = (list, num = 3) => {
    const array = [];
    const dp = function () {
        while (array.length < 3 && list.length) {
            let item = list.pop();
            array.push(item);
            ajax(item).then(data => {
                array.splice(array.indexOf(item), 1);
                dp()
            })
        }
    }

}


const shuffle = array => {
    const len = array.length;
    while (len > 1) {
        let index = Math.floor(Math.random() * len);
        [array[len - 1], array[index]] = [array[index], array[len - 1]];
        len--;
    }
    return array;
}

const compose = (...fns) => {
    return x => {
        return fns.reduceRight((init, cur) => cur(init), x)
    }
}

const pipe = (...fns) => {
    return x => {
        return fns.reduce((init, cur) => cur(init), x)
    }
}


const f1 = x => x + 1;
const f2 = x => x * 3;
const f3 = x => x - 2;



var array = [, , , , 1, 2, 3, 4, 5, 6]
var keys = array.keys();
var values = array.values();

// for (let i of keys) {
//     console.log('keys:', i);

// }


var list = [1, 2, 3, , , , 4, , , , 5, 6];


var l = list.sort((a, b) => {
    console.log(a, b);
    return a - b;
})

console.log(l);