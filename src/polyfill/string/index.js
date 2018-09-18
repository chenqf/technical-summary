// @flow Created by 陈其丰 on 2018/9/18.


var proto = String.prototype;

/**
 用于判断字符串中是否包含参数字符串
 @param {string} searchString
 @param {number} [position]
 @return {boolean}
 */
proto.includes = proto.includes || function (searchString , position) {
    return !!~this.indexOf(searchString,position);
};


/**
 用于判断字符串开始位置是否为参数字符串
 @param {string} searchString
 @param {number} [position]
 @return {boolean}
 */
proto.startsWith = proto.startsWith || function (searchString , position) {
    position = position || 0;
    if(position < 0 || !position) position = 0;
    return this.indexOf(searchString,position) === position;
};

/**
 用于判断字符串开始位置是否为参数字符串
 @param {string} searchString
 @param {number} [position]
 @return {boolean}
 */
proto.endsWith = proto.endsWith || function (searchString , position) {
    searchString = String(searchString);
    position = position || this.length;
    if(position < 0) position = 0;
    if(position > this.length) position = 0;
    if(position === undefined) position = this.length;
    return this.substring(position - searchString.length,position) === searchString;
};

/**
 * 去掉左右两边空格
 */
proto.trim = proto.trim = function () {
    return this.replace(/^\s+|\s+$/g,'')
};

/**
 将字符串重复 count 次
 @param {number} count
 @return {string}
 */
proto.repeat = proto.repeat || function (count) {
    count = ~~Number(count);
    var res = '';
    while (count){
        res = res + this;
    }
    return res;
};
/**
 * 头部补全
 */
proto.padStart = proto.padStart || function (count,str) {
    var len = this.length;
    if(len >= count) return this;
    if(str === '') return this;
    if(str === undefined) str = ' ';
    str = String(str);
    var num = Math.ceil((count - len)/str.length);
    var res = str.repeat(num).slice(0,count - len);
    return res + this;
};

/**
 * 尾部补全
 */
proto.padEnd = proto.padEnd || function (count,str) {
    var len = this.length;
    if(len >= count) return this;
    if(str === '') return this;
    if(str === undefined) str = ' ';
        str = String(str);
    var num = Math.ceil((count - len)/str.length);
    var res = str.repeat(num).slice(0,count - len);
    return this + res;
};
