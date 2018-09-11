
## 寻找旋转排序数组中的最小值 II
> 假设按照升序排序的数组在预先未知的某个点上进行了旋转。                      
> ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。                     
> 请找出其中最小的元素。                          
> 注意数组中可能存在重复的元素。   



### 示例 1
> 输入: [3,4,5,1,2]     
> 输出: 1

### 示例 2
> 输入: [2,2,2,0,1]           
> 输出: 0



### 解法
```javascript 1.8
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
```
