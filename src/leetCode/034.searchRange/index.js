

let searchRange = function(nums,target,start = 0,end = nums.length - 1) {
    if(start > end){
        return [-1,-1]
    }
    if(start === end){
        return nums[start] === target ? [start,start]:[-1,-1]
    }
    let mid = ~~((start + end)/2),
        midVal = nums[mid];
    if(midVal === target){
        let i = mid - 1,
            j = mid + 1;
        while (i>=start && nums[i] === target){
            i --;
        }
        while (j<=end && nums[j] === target){
            j ++;
        }
        return [i +1,j-1]
    }else if(nums[mid + 1] <= target){
        return searchRange(nums,target,mid + 1,end)
    }else{
        return searchRange(nums,target,start,mid -1)
    }
};

