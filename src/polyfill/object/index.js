// @flow Created by 陈其丰 on 2018/9/18.


Object.is = Object.is || function (a, b) {
    if (a === b) {
        return a !== 0 || 1 / a === 1 / b;
    }
    return a !== a && b !== b;
};



Object.assign = function(){
    var target = Object(arguments[0]);
    var args = Array.prototype.slice(1).filter(function (item) {
        return item !== null && (typeof item === 'string' || typeof item === 'object');
    });
    for(var i = 0; i<args.length; i++){
        for(var j in args[i]){
            if(args[i].hasOwnProperty(j)){
                target[j] = args[i][j]
            }
        }
    }
    return target;
};