// @flow Created by 陈其丰 on 2018/8/17.


let search = function(nums, target){
    let left = 0,
        right = nums.length - 1;
    while (left <= right){
        let mid = ~~((left + right)/2),
            midValue = nums[mid];
        if(midValue === target){
            return mid;
        }else if(midValue < nums[right]){
            if(midValue < target && nums[right] >= target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }else{
            if(nums[left] <= target && midValue > target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
    }
    return -1;
};

console.log(search([3,1],1));