
## 搜索旋转排序数组
> 假设按照升序排序的数组在预先未知的某个点上进行了旋转。   
> ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。   
> 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。     
> 你可以假设数组中不存在重复的元素。     
> 你的算法时间复杂度必须是 O(log n) 级别。     

### 示例 1
> 输入: nums = [4,5,6,7,0,1,2], target = 0    
> 输出: 4 

### 示例 2
> 输入: nums = [4,5,6,7,0,1,2], target = 3    
> 输出: -1


### 解法
```javascript 1.8
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
```
