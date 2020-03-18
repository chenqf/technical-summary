// TODO 非枚举属性 symbol 函数 类对象等
const clone = (obj, hash = new WeakMap()) => {
    let result;
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    const type = Object.prototype.toString.call(obj);
    //数组
    if (type === '[object Array]') {
        result = [];
        hash.set(obj, result)
        obj.forEach(item => {
            result.push(clone(item, hash));
        })
    }
    //普通对象
    else if (type === '[object Object]') {
        result = {};
        hash.set(obj, result)
        const keys = Object.keys(obj);
        keys.forEach(key => {
            result[key] = clone(obj[key], hash);
        })
    }
    //正则对象 exec/test 时 lastIndex 改变时可能有用(g时lastIndex才生效)
    else if (type === '[object RegExp]') {
        let flags = '';
        flags += obj.global ? 'g' : '';
        flags += obj.ignoreCase ? 'i' : '';
        flags += obj.multiline ? 'm' : '';
        result = new RegExp(obj.source, flags);
    }
    //日期对象
    else if (type === '[object Date]') {
        result = new Date(obj.getTime());
    }
    //map对象
    else if (type === '[object Map]') {
        result = new Map();
        hash.set(obj, result);
        for (let [key, value] of obj) {
            result.set(key, clone(value));
        }
    }
    //set对象
    else if (type === '[object Map]') {
        result = new Set();
        hash.set(obj, result);
        obj.forEach(item => {
            result.add(clone(item, hash));
        })
    }
    //DOM节点
    // else if (obj instanceof HTMLElement) {
    //     //属性也会复制  
    //     //参数true: 子代也会复制
    //     //事件无法复制
    //     return obj.cloneNode(true);
    // }
    // 包装对象-数字
    else if (typeof obj === 'object' && type === '[object Number]') {
        result = new Number(Number(obj));
    }
    // 包装对象-数字
    else if (typeof obj === 'object' && type === '[object String]') {
        result = new String(String(obj));
    }
    // 包装对象-布尔
    else if (typeof obj === 'object' && type === '[object Boolean]') {
        result = new Boolean(Boolean(obj));
    } else {
        result = obj;
    }
    return result;
}




const data = {
    a: [1, 2, 3, 4],
    b: {},
    c: {}
}
data.b.c = data.c;
data.c.b = data.b;
data.b.xx = 100;

const d = clone(data);

data.b.c.ddd = 1000;
console.log(data)




console.log(d);