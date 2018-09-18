// @flow Created by 陈其丰 on 2018/9/18.

/**
 * 扩展方法 equal
 * 定义equal 方法，解决小数加减法精度问题
 */
Number.equal = function ( a , b) {
    return Math.abs((a - b)) <= Number.EPSILON;
};

/**
 * 扩展方法 isMinusZero
 * 判断是否是负零 -0
 */

Number.isMinusZero = function (num) {
    return 0 === num && 1/num === -Infinity;
};

