/**
 * 函数组合串联
 */
let compose = function (func) {
    return function (arg) {
        return func.reduceRight(function (composed, fn) {
            return fn(composed);
        }, arg)
    }
};