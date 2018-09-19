
let findMaxAverage = function(nums, k) {
    let i = 0,
        j = 0,
        len = nums.length,
        sum = 0,
        res = -Infinity;
    while (i<len && j<len && j - i + 1 < k){
        sum = sum + nums[j];
        if(j - i + 1 === k){
            res = Math.max(res,sum/k);
            sum = sum - nums[i];
            i++;
        }
        j++;
    }
    return res;
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4));

