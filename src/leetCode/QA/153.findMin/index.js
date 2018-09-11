


let findMin = function (nums) {
    let len = nums.length;
    let left = 0,right = len - 1;
    //排除数组个数为一，或未旋转的情况
    if(nums[left] <= nums[right]){
        return nums[0];
    }
    //找到旋转的位置
    while (right - left > 1){
        let mid = ~~((left + right)/2),
            midVal = nums[mid];
        if(nums[left] < midVal){
            left = mid;
        }else if(midVal < nums[right]){
            right = mid;
        }
    }
    return nums[right];
};