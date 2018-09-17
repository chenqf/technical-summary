// @flow Created by 陈其丰 on 2018/9/17.

var proto = Array.prototype,
    slice = [].slice,
    splice = [].splice;

/**
 返回由参数组成的新数组
 @param {...null} items
 @static
 @return {Array}
 */
Array.of = Array.of || function () {
    let args = slice.apply(arguments);
    return [].concat(args);
};

/**
 TODO 未处理Iterator 接口
 类数组转换为真正数组
 @param items
 @param {Function} [mapfn]
 @param [thisArg]
 @static
 @return {Array}
 */
Array.from = Array.from || function (items,mapFn,thisArg) {
    mapFn = mapFn || function (item) {return item};
    return slice.call(items).map(mapFn,thisArg)
};


/**
 TODO 未处理操作类数组对象
 将数组指定位置拷贝到数组的另一个指定位置
 @param {number} target
 @param {number} start
 @param {number} [enf]
 @return {Array.<T>}
 */
proto.copyWithin = proto.copyWithin || function (target,start,enf) {
    var len = this.length;
    target = target || 0;
    start = start || 0;
    enf = enf || len;
    if(target < 0)target = target + len;
    if(start < 0)start = start + len;
    if(enf < 0)enf = enf + len;
    splice.apply(this,[target,enf - start].concat(this.slice(start,enf)));
    return this;
};


/**
 找出第一个符合条件的数组成员
 @param {function(T, number, obj): boolean} predicate
 @param [thisArg]
 @return {T}
 */
proto.find = proto.find || function (predicate,thisArg) {
    predicate = predicate || function () {};
    for(var i = 0,len = this.length; i<len; i++){
        if(!!predicate.call(thisArg,this[i],i,this)){
            return this[i];
        }
    }
    return undefined;
};

/**
 返回第一个符合条件的数组成员的位置
 @param {function(T, number, obj): boolean} predicate
 @param [thisArg]
 @return {number}
 */
proto.findIndex = proto.findIndex || function (predicate,thisArg) {
    predicate = predicate || function () {};
    for(var i = 0,len = this.length; i<len; i++){
        if(!!predicate.call(thisArg,this[i],i,this)){
            return i;
        }
    }
    return -1;
};

