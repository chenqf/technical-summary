
## 乘积小于K的子数组
> 给定一个正整数数组 nums。       
> 找出该数组内乘积小于 k 的连续的子数组的个数。

### 示例 1
> 输入: nums = [10,5,2,6], k = 100              
> 输出: 8      
> 解释: 8个乘积小于100的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。 
> 注意: 需要注意的是 [10,5,2] 并不是乘积小于100的子数组。     


### 说明
+ 0 < nums.length <= 50000
+ 0 < nums[i] < 1000
+ 0 <= k < 10^6

### 解法 
```javascript 1.8
let numSubarrayProductLessThanK = function(nums, k) {
    let res = 0;
    let temp = 1;
    let left = 0;
    for(let i = 0; i<nums.length; i++){
        let cur = nums[i];
        temp = temp * cur;
        while (temp >= k){
            temp = temp / nums[left++]
        }
        if(temp < k){
            res = res + i - left + 1;
        }
    }
    return res;
};
```
