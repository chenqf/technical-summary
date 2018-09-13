
let helper = function (k,n,cur,sum,preList,res) {
    if(sum === n && preList.length === k){
        res.push(preList);
        return;
    }
    for(let i = cur;i<= 9;i++){
        helper(k,n,i+1,sum + i,[...preList,i],res)
    }
};


let combinationSum3 = function(k, n) {
    let res = [];
    helper(k,n,1,0,[],res);
    return res;
};