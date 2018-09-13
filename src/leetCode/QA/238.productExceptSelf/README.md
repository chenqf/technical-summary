
## 除自身以外数组的乘积
> 给定长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

### 示例 1
> 输入: [1,2,3,4]             
> 输出: [24,12,8,6]       

### 说明: 
+ 请不要使用除法，且在 O(n) 时间复杂度内完成此题。


### 解法
```javascript 1.8
let productExceptSelf = function(nums) {
    let len = nums.length;
    let preList = [1];
    let nextList = [];
    nextList[len - 1] = 1;
    for(let i = 1; i<len; i++){
        preList[i] = preList[i - 1] * nums[i - 1];
    }
    for(let i = len - 2; i>= 0; i--){
        nextList[i] = nextList[i + 1] * nums[i + 1];
    }
    return nums.map((item,index)=>preList[index] * nextList[index]);
};
```