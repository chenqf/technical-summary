// Created by 陈其丰 on 2019/1/31.
/**
 * 增加方法 compact
 * 用于获取数组中非null 非 undefined 的项
 * @param xs
 */
Array.compact = function (xs) {
    return xs.filter(function (x) {
        return x !== undefined && x !== null;
    })
};