/**
 * 前置增强
 */
Function.prototype.before = function (fn = Function.prototype) {
    let self = this;
    return function (...params) {
        fn.apply(this,params);
        return self.apply(this,params);
    }
};

/**
 * 后置增强
 */
Function.prototype.after = function (fn = Function.prototype) {
    let self = this;
    return function (...params) {
        let result =self.apply(this,params);
        fn.apply(this,params);
        return result;
    }
};

let fn = ()=>{ console.log('I am a function !');};
let fun = fn.before(()=>{
    console.log('I am before');
}).after(()=>{
    console.log('I am after');
});
fun();