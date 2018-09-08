


let findMaxConsecutiveOnes = function(nums) {
    let i = 0,j = 0,res = 0,len = nums.length;
    while (i < len && j < len) {
        if (nums[i] === 0) {
            i++;
            j++;
        } else if (nums[i] === 1) {
            while (j + 1 < len && nums[j + 1] === 1){
                j++
            }
            res = Math.max(res,j - i + 1);
            i = j = j + 1;
        }
    }
    return res;
};



