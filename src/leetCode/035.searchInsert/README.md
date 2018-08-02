
## 搜索插入位置
> 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
>> 你可以假设数组中无重复元素。

### 示例 1
> 输入: [1,3,5,6], 5      
> 输入: 2
### 示例 2
> 输入: [1,3,5,6], 2  
> 输入: 1
### 示例 3
> 输入: [1,3,5,6], 7  
> 输入: 4
### 示例 4
> 输入: [1,3,5,6], 0  
> 输入: 0

### 二分法递归求解
```javascript 1.8
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
```
