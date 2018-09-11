


let findMin = function (nums) {
    let len = nums.length;
    let left = 0,right = len - 1;
    while (left + 1 < right){
        if(nums[left] === nums[left + 1]){
            left++;
        }else if(nums[right] === nums[right - 1]){
            right--;
        }else if(nums[left] === nums[right]){
            right--;
        }else if(nums[left] < nums[right]){
            return nums[left];
        }else{
            let mid = ~~((left + right)/2),
                midVal = nums[mid];
            if(nums[left] <midVal){
                left = mid;
            }else if(midVal < nums[right]){
                right = mid;
            }
        }
    }
    return Math.min(nums[left],nums[right]);
};

console.log([1,3,5]);