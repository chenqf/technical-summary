
## 搜索旋转排序数组 II
> 假设按照升序排序的数组在预先未知的某个点上进行了旋转。                         
> ( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。            
> 编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。    

### 示例 1
> 输入: nums = [2,5,6,0,0,1,2], target = 0            
> 输出: true            

### 示例 2
> 输入: nums = [2,5,6,0,0,1,2], target = 3             
> 输出: false     

### 解法
```javascript 1.8
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
```
