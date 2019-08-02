const compose = function(...fns){
    return function(x){
        return fns.reduceRight((init,cur)=>cur(init),x);
    }
}