
let maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    let len = nums.length;
    let p1 = nums[0] * nums[1] * nums[len - 1];
    let p2 = nums[len - 1] * nums[len - 2] * nums[len - 3];
    return Math.max(p1,p2)
};

