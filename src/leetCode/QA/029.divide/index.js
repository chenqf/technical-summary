

let divide = function(dividend, divisor) {
    let res = 0;
    let flg = (dividend >= 0 && divisor > 0) || (dividend <= 0 && divisor < 0);
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    if(divisor === 1){
        res = dividend;
    }else{
        while (dividend >= divisor){
            res++;
            dividend = dividend - divisor;
        }
    }
    if(flg){
        return Math.min(res,Math.pow(2,31) - 1);
    }else{
        return Math.max(-res,-Math.pow(2,31));
    }
};