


let missingNumber = function (nums) {
    let len = nums.length,
        s = len * (len + 1) / 2,
        sum = nums.reduce((init,cur)=>init + cur,0);
    return s - sum;
};