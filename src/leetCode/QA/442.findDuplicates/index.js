


let findDuplicates = function (nums) {
    let res = [];
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = Math.abs(nums[i]);
        let curIndex = cur - 1;
        if(nums[curIndex] < 0){
            res.push(cur);
        }
        nums[curIndex] = -nums[curIndex];
    }
    return res;
};