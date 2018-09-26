


let findMin = function (nums) {
    let len = nums.length;
    let left = 0,right = len - 1;
    while (left < right && nums[left] > nums[right]){
        let mid = ~~((left + right)/2),
            midVal = nums[mid];
        if(midVal > nums[left]){
            left = mid + 1;
        }else if(midVal > nums[mid + 1]){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    return nums[left];
};