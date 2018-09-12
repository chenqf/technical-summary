


let findPeakElement = function(nums) {
    if(!nums.length){
        return -1;
    }
    let left = 0,right = nums.length - 1;
    while (left <= right){
        let mid = ~~((left + right)/2);
        if(nums[mid] < nums[mid + 1]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return left;
};