// @flow Created by 陈其丰 on 2018/9/18.

// import '../number/index';

/**
 * 截取小数部分，返回数字类型
 */
Math.trunc = Math.trunc || function (num) {
    return num < 0 ? Math.ceil(num) : Math.floor(num);
};

/**
 * 判断
 * 正数
 * 负数
 * + 0
 * - 0
 * 非数字
 */
Math.sign = Math.sign || function (num) {
    num = Number(num);
    if(Number.isNaN(num)) return NaN;
    if(num > 0) return 1;
    if(num < 0) return -1;
    if(Number.isMinusZero(num)) return - 0;
    if(num === 0) return 0;
};

/**
 * 计算立方根
 */
Math.cbrt = Math.cbrt || function (x) {
    var y = Math.pow(Math.abs(x),1/3);
    return x < 0 ? -y : y;
};

/**
 * 返回所有参数平方和的平方根
 */
Math.hypot = Math.hypot || function () {
    var sum = Array.prototype.slice.call(arguments).map(function (item) {
        return Number(item);
    }).reduce(function (init,cur) {
        return init + Math.pow(cur,2)
    },0);
    return Number.isNaN(sum) ? NaN : Math.pow(sum,1/2)
};