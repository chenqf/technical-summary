
let num = 123;

let reverseNum = function (num) {
    //符号，正数为true，负数为false
    let point = num >= 0;
    let absNumString = String(Math.abs(num));
    let result = Array.prototype.reduceRight.call(absNumString,(a,b)=>{
        return a + b;
    },'') * (point?1:-1);
    let resultNum = parseInt(result);
    if(resultNum >= -(2**31) && resultNum <= 2**31-1){
        return resultNum;
    }else {
        return 0;
    }
};

console.log(reverseNum(num));