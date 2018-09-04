
## 最大子序和
> 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

### 示例 1
> 输入: [-2,1,-3,4,-1,2,1,-5,4],  
> 输出: 6     
> 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。    

### 解法
```javascript 1.8
let maxSubArray = function (nums) {
    let res = -Infinity, curSum = 0;
    for (let i = 0;i<nums.length; i++) {
        curSum = Math.max(curSum + nums[i], nums[i]);
        res = Math.max(res, curSum);
    }
    return res;
};
```
