

let maxSubArray = function (nums) {
    let res = -Infinity, curSum = 0;
    for (let i = 0;i<nums.length; i++) {
        curSum = Math.max(curSum + nums[i], nums[i]);
        res = Math.max(res, curSum);
    }
    return res;
};




console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));