


let findUnsortedSubarray = function(nums) {
    let start = -1,
        end = -2,
        len = nums.length,
        left = nums[0],
        right = nums[len - 1];
    for(let i = 0;i<len;i++){
        let leftVal = nums[i],
            rightVal = nums[len - i - 1];
        left = Math.max(left,leftVal);
        right = Math.min(right,rightVal);
        if(left > leftVal){
            end = i;
        }
        if(right<rightVal){
            start = len - i - 1;
        }
    }
    return end - start + 1;
};