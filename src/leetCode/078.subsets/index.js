

let helper = function (nums,index,cur,res) {
    res.push(cur);
    for(let i = index; i<nums.length; i++){
        helper(nums,i + 1,[...cur,nums[i]],res);
    }
};

let subsets = function(nums) {
    let res = [];
    helper(nums,0,[],res);
    return res;
};