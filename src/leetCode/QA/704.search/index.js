

let search = function(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right){
        let mid = ~~((left + right)/2),
            midVal = nums[mid];
        if(midVal === target){
            return mid;
        }else if(midVal > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
};
