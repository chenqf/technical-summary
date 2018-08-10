

let searchInsert = function(nums, target,start = 0,end = nums.length - 1) {
    if(start === end){
        return target <= nums[start] ? start : start + 1
    }
    if(start > end){
        return start;
    }
    let mid = ~~((start + end)/2);
    let midVal = nums[mid];
    if(target === midVal){
        return mid;
    }
    
    //比较元素在左侧子数组
    if(target < midVal){
        return searchInsert(nums,target,start,mid - 1);
    }
    //比较元素在右侧子数组
    if(target > midVal){
        return searchInsert(nums,target,mid + 1,end);
    }
};


let searchInsert1 = function(nums, target) {
    let len = nums.length,
        left = 0,
        right = len - 1;
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
    return left;
};

console.log(searchInsert([3,5,7,9,10],0));
