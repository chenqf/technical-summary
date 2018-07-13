// @flow Created by 陈其丰 on 2018/7/13.


/**
 *  根据入参函数的参数个数决定
 *  返回封装的函数，还是执行函数
 *  参数顺序，从左到右
 */
function curry(fn,...args) {
    let length = fn.length;
    return function (...params) {
        args.push(...params);
        if(args.length >= length){
            return fn(...args);
        }else{
            return curry(fn,...args);
        }
    }
}

/**
 *  根据入参函数的参数个数决定
 *  返回封装的函数，还是执行函数
 *  参数顺序，从右到左
 */
function curryRight(fn,...args) {
    let length = fn.length;
    return function (...params) {
        args.unshift(...params);
        if(args.length >= length){
            return fn(...args);
        }else{
            return curryRight(fn,...args);
        }
    }
}

/**
 *  延迟执行
 */
function currying(fn,...args) {
    return function cb(..._args) {
        if(!_args.length){
            return fn(...args);
        }else{
            args.push(..._args);
            return cb;
        }
    }
}

function fn(a,b,c) {
    console.log(...arguments);
}

console.log(curry(fn)(1)(2)(3));    // 1,2,3
console.log(curry(fn)(1)(2,3));     // 1,2,3
console.log(curry(fn,1)(2,3));      // 1,2,3

console.log(curryRight(fn)(1)(2)(3));    // 3,2,1
console.log(curryRight(fn)(1)(2,3));     // 2,3,1
console.log(curryRight(fn,1)(2,3));      // 2,3,1

console.log(currying(fn,1)(2)(3)());    // 1,2,3
console.log(currying(fn)(1)(2)(3)());    // 1,2,3
console.log(currying(fn)(1,2)(3)());    // 1,2,3