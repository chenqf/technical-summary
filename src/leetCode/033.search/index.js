// @flow Created by 陈其丰 on 2018/8/17.


let binarySearch = function (nums,target,start,end) {
    if(start > end){
        return - 1;
    }
    if(start === end && nums[start] !== target){
        return -1;
    }
    let mid = ~~((start + end)/2),
        midVal = nums[mid];
    if(midVal === target){
        return mid;
    }
    if(target > midVal){
        return binarySearch(nums,target,mid + 1,end);
    }else{
        return binarySearch(nums,target,start,mid - 1);
    }
};


let search = function(nums, target,start = 0,end = nums.length - 1) {
    let mid = ~~(( start + end ) / 2),
        midVal = nums[mid];
    if(start > end){
        return - 1;
    }
    if(midVal === target){
        return mid;
    }
    if(start === end){
        return nums[start] === target ? start : -1;
    }
    if(end - start === 1){
        return nums[end] === target ? end : -1;
    }
    //当前已排序
    if(nums[start] < nums[end]){
        return binarySearch(nums,target,start,end)
    }
    //mid 正好是折点
    else if( nums[mid - 1] > nums[mid + 1] ){
        if(target >= nums[start] && target <= nums[mid - 1]){
            return binarySearch(nums,target,start,mid - 1)
        }else if(target >= nums[mid + 1] && target <= nums[end]){
            return binarySearch(nums,target,mid + 1,end)
        }else{
            return -1
        }
    }
    //折点在左边
    else if(nums[start] > nums[mid - 1]){
        if(target >= nums[mid + 1] && target <= nums[end]){
            return binarySearch(nums,target,mid+1,end)
        }else{
            return search(nums,target,start,mid-1);
        }
    }
    //折点在右边
    else if(nums[mid + 1] > nums[end]){
        if(target >= nums[start] && target <= nums[mid-1]){
            return binarySearch(nums,target,start,mid-1)
        }else{
            return search(nums,target,mid+1,end)
        }
    }
};


console.log(search([1,3,5],1));