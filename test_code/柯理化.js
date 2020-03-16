// 降低通用性,提高适用性

// TODO 缺少占位实现
const curry = (fn, len = fn.length) => {
    const _curry = function (fn, len, ...args) {
        return function (...params) {
            if (args.length + params.length >= len) {
                return fn.apply(this, [...args, ...params]);
            } else {
                return _curry.call(this, fn, len, ...args, ...params)
            }
        }

    }
    return _curry(fn, len);
}


const fn = (a, b, c) => a + b + c;


const f1 = curry(fn);

const res = f1(1)(2)(3)

console.log('res:', res);