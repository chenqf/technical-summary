

let constructArray = function(n, k) {
    let res = [];
    let i = 1,j = n;
    while (k > 2){
        res.push(j--);
        res.push(i++);
        k = k - 2;
    }
    if(k === 2){
        while (j >= i + 2){
            res.push(j--);
        }
        res.push(i++);
        res.push(i)
    }else{
        while (j>=i){
            res.push(j--);
        }
    }
    return res;
};


console.log(constructArray(5,2));