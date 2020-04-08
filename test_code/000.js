const flat = (array, depth = 1) => {
    const result = [];
    while (array.some(i => Array.isArray(i)) && depth) {
        depth--;
        result = result.concat(...array);
    }
    return result;
}

class Event {
    constructor() {
        this._events = new Map();
    }
    on(key, callback) {
        let handlers = this._events.get(key);
        if (handlers) {
            handlers.push(callback);
        } else {
            this._events.set(key, [callback]);
        }
    }
    emit(key, ...args) {
        let handlers = this._events.get(key) || [];
        handlers.forEach(handler => {
            handler.call(this, ...args)
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
                fn.apply(this, args)
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, wait);
        }
    }
}


const throttle = function (fn, wait, leading = true, trailing = true) {
    let preTime = 0;
    let timer = null;

    return function (...args) {

        const now = Date.now();

        if (!leading && !preTime) {
            preTime = now;
        }

        if (now - preTime >= wait) {
            preTime = now;
            clearTimeout(timer);
            timer = null;
            fn.apply(this, args);
        } else if (!timer && trailing) {
            timer = setTimeout(() => {
                timer = null;
                preTime = Date.now();
                fn.apply(this, args)
            }, wait - now + preTime);
        }
    }
}

const curry = function (fn, len = fn.length) {
    const _curry = function (fn, len, ...params) {
        return function (...args) {
            const _args = [...params, ...args];
            if (_args.length >= len) {
                return fn.apply(this, _args);
            } else {
                return _curry.call(this, fn, len, ..._args)
            }
        }
    }
    return _curry(fn, len)
}



const clone = function (obj) {
    const _clone = function (data, map = new WeakMap) {
        if (map.has(data)) {
            return map.get(data);
        }
        const result = null;
        const type = Object.prototype.toString.call(data);

        if (type === '[object Object]') {
            result = {};
            map.set(data, result)
            const keys = Object.keys(data);
            keys.forEach(i => {
                result[i] = _clone(data[i], map)
            })
        } else if (type === '[object Array]') {
            result = [];
            map.set(data, result)
            data.forEach(i => {
                result.push(_clone(i, map))
            })
        } else if (type === '[object Set]') {
            result = new Set();
            map.set(data, result)
            data.forEach(i => {
                result.add(_clone(i), map)
            })
        } else if (type === '[object Map]') {
            result = new Map();
            map.set(data, result)
            for (let [key, value] of data) {
                result.set(key, _clone(value, map))
            }
        } else if (type === '[object RegExp]') {
            let source = data.source;
            let g = data.global ? 'g' : '';
            let i = data.ignolCase ? 'i' : '';
            let m = menuLine ? 'm' : '';
            result = new RegExp(source, g + i + m)
        } else if (data instanceof HTMLElement) {
            result = data.cloneNode(true);
        } else if (type === '[object Number]' && typeof data === 'object') {
            result = new Number(Number(data));
        } else {
            result = data;
        }
        return result;
    }
    return _clone(obj)
}


// 高层次不依赖于低层次模块 依赖于抽象
// 抽象不依赖于实现 依赖于接口
// 面向接口编程 不要面向实现编程


class App {
    constructor(options) {
        this.options = options;
        this.init();
    }
    static modules = [];
    static use(module) {
        App.modules.push(module);
    }
    init() {
        App.modules.forEach(module => {
            module.init(this);
        })
        this.options.initReady(this)
    }
}


const m1 = {
    init(app) {
        app.m1 = '123'
    }
}

const m2 = {
    init(app) {
        app.m2 = '234'
    }
}

App.use(m1)
App.use(m2)

new App({
    initReady(app) {
        console.log('app', app);

    }
})


// 路由 hash  history

// hash  监听 hashchange

// history  重写 pushState replaceState  监听 popstate   全局拦截a标签


const isPlainObject = function (obj) {
    let prop = obj;
    while (Object.getPrototypeOf(prop) !== null) {
        prop = Object.getPrototypeOf(prop);
    }
    return Object.getPrototypeOf(obj) === prop;
}




const f = function (num) {
    return String(num).replace(/(?!\b)(?=(\d{3})+\b)/g, ',')
}


const result = f(-123123123.66);


console.log(result)


const shunt = function (urls, len = 3) {
    const list = [];
    const _dp = function () {
        while (list.length < len) {
            let url = urls.pop();
            list.push(url);
            ajax(url).then(() => {
                list.splice(list.indexOf(url), 1);
                _dp();
            })
        }
    }
    _dp();

}


const shuffle = function (array) {
    let len = array.length;
    while (len > 1) {
        let index = Math.floor(Math.random() * len);
        [array[index], array[len - 1]] = [array[len - 1], array[index]]
        len--;
    }
    return array;
}


const compose = function (...fns) {
    return x => fns.reduceRight((init, cur) => cur(init), x)
}






const PENDING = 0;
const SUCCESS = 1;
const ERROR = 2;

const thenAble = function (data) {
    return typeof data === 'object' && typeof data.then === 'function'
}

const toResolve = function (data) {
    if (thenAble(data)) {
        data.then(d => {
            toResolve.call(this, d);
        }, e => {
            toReject.call(this, e)
        })
    } else {
        this.over = true;
        this.value = data;
        this.state = SUCCESS;
        this.thenList.forEach(item => {
            exec.call(this, item)
        })
        this.thenList = [];
    }
}

const toReject = function (error) {
    this.over = true;
    this.value = error;
    this.state === ERROR;
    this.thenList.forEach(item => {
        exec.call(this, item)
    })
    this.thenList = [];
}

const exec = function (item) {
    const {
        onResolve,
        onReject,
        resolve,
        reject
    } = item;
    const cb = this.state === SUCCESS ? onResolve : onReject;
    if (typeof cb !== 'function') {
        this.state === SUCCESS ? resolve(this.value) : reject(this.value);
    } else {
        setTimeout(() => {
            try {
                const result = cb(this.value)
                resolve(result);
            } catch (e) {
                reject(e);
            }
        });
    }
}



class Promise {
    constructor(fn) {
        this.state = PENDING;
        this.over = false;
        this.value = null;
        this.thenList = [];
        try {
            fn(data => {
                if (!this.over) {
                    toResolve.call(this, data)
                }
            }, error => {
                toReject.call(this, error);
            })
        } catch (e) {
            toReject.call(this, error);
        }
    }
    then(onResolve, onReject) {
        return new Promise((resolve, reject) => {
            if (this.state === PENDING) {
                this.thenList.push({
                    onReject,
                    onResolve,
                    resolve,
                    reject
                })
            } else {
                exec.call(this, {
                    onReject,
                    onResolve,
                    resolve,
                    reject
                })
            }
        })
    }
    catch (fn) {
        return this.then(null, fn);
    }
    static all() {

    }
    static race() {

    }
    static resolve(d) {
        if (d instanceof Promise) {
            return d;
        } else if (thenAble(d)) {
            return new Promise(d.then)
        } else {
            return new Promise((resolve, reject) => {
                resolve(d)
            })
        }
    }
    static reject(e) {
        return new Promise((resolve, reject) => {
            reject(e);
        })
    }
}