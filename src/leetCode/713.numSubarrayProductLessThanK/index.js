

let numSubarrayProductLessThanK = function(nums, k) {
    let res = 0;
    let temp = 1;
    let left = 0;
    for(let i = 0; i<nums.length; i++){
        let cur = nums[i];
        temp = temp * cur;
        while (temp >= k){
            temp = temp / nums[left++]
        }
        if(temp < k){
            res = res + i - left + 1;
        }
    }
    return res;
};