function f(str){
    return str.replace(/-\w/g,function(x){
        return x.slice(1).toUpperCase();
    })
}