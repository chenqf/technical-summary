



let fairCandySwap = function(A,B) {
    let sum1 = A.reduce((a,b)=>a+b,0);
    let sum2 = B.reduce((a,b)=>a+b,0);
    let min = sum1 - sum2;
    let res = [];
    for(let i = 0,len = A.length; i<len ; i++){
        let cur = A[i];
        let next = cur - min/2;
        if(~B.indexOf(next)){
            res.push(cur,next);
            break;
        }
    }
    return res;
};
