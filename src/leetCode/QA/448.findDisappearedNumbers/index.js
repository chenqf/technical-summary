


let findDisappearedNumbers = function (nums) {
    let res = [];
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = Math.abs(nums[i]);
        let curIndex = cur - 1;
        nums[curIndex] = -Math.abs(nums[curIndex]);
    }
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = nums[i];
        if(i >= 0 && cur > 0){
            res.push(i);
        }
    }
    return res;
};


findDisappearedNumbers([4,3,2,7,8,2,3,1])

