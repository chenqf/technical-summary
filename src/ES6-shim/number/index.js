// @flow Created by 陈其丰 on 2018/9/18.


// 2进制表示法 0b
// 8进制表示法 0o
// 16进制表示法 0x

//最小精度差
Number.EPSILON = Number.EPSILON || Math.pow(2,-52);
//最大安全整数
Number.MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || ( Math.pow(2,53) - 1 );
//最小安全整数
Number.MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || ( - Math.pow(2,53) + 1 );
//浮点数范围
// Number.MIN_VALUE
// Number.MAX_VALUE

//方法移植
Number.parseInt = Number.parseInt || parseInt;
Number.parseFloat = Number.parseFloat || parseFloat;

/**
 * 检测是否是整数
 */
Number.isInteger = Number.isInteger || function(num){
    return typeof num === 'number' && num % 1 === 0 ;
};
/**
 * 检测是否是安全的整数
 */
Number.isSafeInteger = Number.isSafeInteger || function(num){
    return Number.isInteger(num) && num >= Number.MIN_SAFE_INTEGER && num <= Number.MAX_SAFE_INTEGER;
};

/**
 * 检测 是否是NaN
 */
Number.isNaN = Number.isNaN || function (num) {
    return num !== num;
};

/**
 * 检测是否是有限数
 */
Number.isFinite = Number.isFinite || function(num){
    return typeof num === 'number' && num > -Infinity && num < Infinity;
};


/**
 * 扩展方法 equal
 * 定义equal 方法，解决小数加减法精度问题
 */
Number.equal = function ( a , b) {
    return Math.abs((a - b)) <= Number.EPSILON;
};


