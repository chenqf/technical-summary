


let findPeakElement = function (nums) {
    if(!nums || !nums.length) return -1;
    if(nums.length === 1) return 0;
    let left = 0,
        right = nums.length;
    while (left < right){
        let mid = ~~(left + (right - left)/2),
            midVal = nums[mid];
        if(mid + 1 === nums.length || midVal > nums[mid + 1]){
            right = mid;
        }else{
            left = mid + 1;
        }
    }
    return left;
};
