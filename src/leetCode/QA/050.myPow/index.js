


let myPow = function (x, n) {
    return n < 0 ? 1/power(x,Math.abs(n)):power(x,n)
};

let power = function (x,n) {
    if(n === 0){
        return 1;
    }
    if(n === 1){
        return x;
    }
    let flg = !!(n % 2);//true 奇次方，false 偶次方
    let item = power(x,~~(n/2));
    return flg ? item * item * x : item * item;
};