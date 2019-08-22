const pipe = function(...fns){
    return function(x){
        return fns.reduce((init,cur)=>cur(init),x);
    }
}