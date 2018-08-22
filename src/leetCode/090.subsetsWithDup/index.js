

let helper = function (nums,index,cur,res) {
    res.push(cur);
    let len = nums.length;
    for(let i = index;i<len;i++){
        if(i === index || nums[i - 1] !== nums[i]){
            helper(nums,i + 1,[...cur,nums[i]],res);
        }
    }
};

let subsetsWithDup = function (nums) {
    let res = [];
    nums.sort((a,b)=>a-b);
    helper(nums,0,[],res);
    return res;
};