
let helper = function (candidates,nums,index,target,res) {
    if(target === 0){
        res.push(nums);
        return ;
    }
    if(target < 0){
        return ;
    }
    for(let i = index,len = candidates.length; i<len; i++){
        if(i===index  ||  candidates[i -1] !== candidates[i]){
            helper(candidates,[...nums,candidates[i]],i+1,target - candidates[i],res);
        }
    }
};

let combinationSum2 = function (candidates,target) {
    let res = [];
    candidates.sort((a,b)=>a-b);
    helper(candidates,[],0,target,res);
    return res;
};


console.log(combinationSum2([10,1,2,7,6,1,5],7));