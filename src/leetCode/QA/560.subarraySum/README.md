
## 和为K的子数组
> 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

### 示例 1
> 输入:nums = [1,1,1], k = 2      
> 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。   
     

### 说明 :
+ 数组的长度为 [1, 20,000]。
+ 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。

### 解法
```javascript 1.8
let subarraySum = function(nums, k) {
    let sum = 0;
    let res = 0;
    let map = new Map();
    map.set(0,1);
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = nums[i];
        sum = sum + cur;
        if(map.has(sum - k)){
            res = res + map.get(sum - k);
        }
        map.set(sum,(map.get(sum) || 0) + 1)
    }
    return res;
};
```
