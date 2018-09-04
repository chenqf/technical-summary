

let minSubArrayLen = function (s,nums) {
    let res = Infinity;
    let left = 0,right = 0,sum = 0,len = nums.length;
    while (right < len){
        while (right < len && sum < s){
            sum = sum + nums[right];
            right ++;
        }
        while (sum >= s){
            res = Math.min(res,right - left);
            sum = sum - nums[left];
            left ++;
        }
    }
    return res === Infinity ? 0 : res;
};