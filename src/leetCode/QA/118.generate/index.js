
let generate = function (numRows) {
    let res = [];
    for(let i = 0; i<numRows; i++){
        let l = i + 1;//几个元素
        let r = [];
        r[0] = 1;
        if(i >= 2){
            for(let j = 0;j<res[i - 1].length -1; j++){
                r.push(res[i - 1][j] + res[i - 1][j + 1])
            }
        }
        r[l - 1] = 1;
        res.push(r)
    }
    return res;
};