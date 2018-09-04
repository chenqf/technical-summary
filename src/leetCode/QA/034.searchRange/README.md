
## 在排序数组中查找元素的第一个和最后一个位置
> 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。     
> 你的算法时间复杂度必须是 O(log n) 级别。     
> 如果数组中不存在目标值，返回 [-1, -1]。

### 示例 1:
> 输入: nums = [5,7,7,8,8,10], target = 8     
> 输出: [3,4]     

### 示例 2:
> 输入: nums = [5,7,7,8,8,10], target = 6     
> 输出: [-1,-1]


### 解法
```javascript 1.8
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
```
