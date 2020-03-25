const flat = (array, depth = 1) => {
    while (array.some(i => Array.isArray()) && depth--) {
        array = [].concat(...array);
    }
    return array;
}


class EventBus {
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
    emit(key) {
        let handlers = this._events.get(key) || [];
        handlers.forEach(handler => {
            handlers.apply(this)
        })
    }
    delete(key) {
        this._events.delete(key);
    }
}

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
                timer = null;
            }, wait);
        }
    }
}

const throttle = (fn, wait, leading = true, trailing = true) => {
    let preTime = 0;
    let timer = null;
    return function (...args) {
        const now = Date.now();
        if (now - preTime >= wait) {
            clearTimeout(timer);
            timer = null;
            preTime = now;
            return fn.apply(this, args);
        } else if (!timer) {
            timer = setTimeout(() => {
                preTime = Date.now();
                timer = null;
                fn.apply(this, args);
            }, wait - now + preTime);
        }
    }
}


const curry = (fn, len = fn.length) => {
    const _curry = function (fn, len, ...params) {
        return function (...args) {
            const _args = [...params, ...args];
            if (_args.length) {
                return fn.apply(this, _args);
            } else {
                return _curry.call(this, fn, len, ..._args);
            }
        }
    }
    return _curry(fn, len)
}


const clone = function () {
    const dp = function (obj, hash = new WeakMap()) {
        const type = Object.prototype.toString.call(obj);
        let result = null;
        if (hash.has(obj)) {
            return hash.get(obj);
        }


    }
}

const isPlainObject = obj => {
    let prop = obj;
    while (Object.getPrototypeOf(prop) !== null) {
        prop = Object.getPrototypeOf(prop)
    }
    return Object.getPrototypeOf(obj) === prop;
}


const compose = (...fns) => {
    return x => {
        return fns.reduceRight((init, cur) => cur(init), x)
    }
}


const shuffle = array => {
    let len = array.length;
    while (len > 1) {
        let index = Math.floor(Math.random() * len--);
        [array[index], array[len]] = [array[len], array[index]];
    }
    return array;
}

const shunt = (array, num = 3) => {
    let list = [];
    const dp = function () {
        while (list.length < 3 && array.length) {
            let cur = array.pop();
            list.push(cur);
            ajax(cur).then(d => {
                list.splice(list.indexOf(cur), 1);
                dp();
            })
        }
    }
}


// window.addEventLister('hashchange')

// history.pushState
// history.replaceState
// window.addEventLister('popstate')
// 全局拦截 e.preventDefault()



class App {
    constructor(options) {
        this.options = options;
        this.init();
    }
    static modules = [];
    static use(...modules) {
        App.modules = [...App.modules, ...modules];
    }
    init() {
        this.initModules();
        this.options.initReady(this);
    }
    initModules() {
        App.modules.forEach(module => {
            module.init(this);
        })
    }
}

class A {
    constructor() {

    }
    init(app) {
        app.A = {
            config: app.options.configA
        };
    }
}

class B {
    constructor() {

    }
    init(app) {
        app.B = {
            config: app.options.configB
        };
    }
}

App.use(new A, new B);

new App({
    configA: {
        a: 1
    },
    configB: {
        b: 2
    },
    initReady(app) {
        console.log(app)
    }
})


const obj = {
    0: 0,
    1: 1,
    3: 3,
    5: 5,
    7: 7,
    8: 8,
    10: 10
};
Array.prototype.unshift.call(obj, 100);
console.log(obj);