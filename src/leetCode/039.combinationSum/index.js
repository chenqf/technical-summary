
let helper = function (candidates,nums,target,index,res) {
    if(target === 0){
        res.push(nums);
        return ;
    }
    if(target < 0){
        return ;
    }
    for(let i = index,len = candidates.length;i<len; i++){
        helper(candidates,[...nums,candidates[i]],target - candidates[i],i,res);
    }
};

let combinationSum = function (candidates,target) {
    let res = [];
    candidates.sort();
    helper(candidates,[],target,0 ,res);
    return res;
};