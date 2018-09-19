// @flow Created by 陈其丰 on 2018/9/18.




Object.deepAssign = function () {
    var target = Object(arguments[0]);
    var args = Array.prototype.slice.call(arguments,1).filter(function (item) {
        return item !== null && (typeof item === 'string' || typeof item === 'object');
    });
    for(var i = 0; i<args.length; i++){
        for(var j in args[i]){
            if(args[i].hasOwnProperty(j)){
                if(Object.prototype.toString.call(target[j]) === '[object Object]' && Object.prototype.toString.call(args[i][j]) === '[object Object]'){
                    target[j] = Object.deepAssign(target[j],args[i][j])
                }else{
                    target[j] = args[i][j]
                }
            }
        }
    }
    return target;
};