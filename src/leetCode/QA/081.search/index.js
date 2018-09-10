



let search = function(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right){
        let mid = ~~((left+right)/2),
            midValue = nums[mid];
        if(midValue === target){
            return true;
        }else if(midValue < nums[right]){
            if(midValue < target && nums[right] >= target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }else if(midValue > nums[right]){
            if(target >= nums[left] && target < midValue){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            right--;
        }
    }
    return false;
};

console.log(search([3,1],1));