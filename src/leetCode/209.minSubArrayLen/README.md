
## 长度最小的子数组
> 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

### 示例 1
> 输入: s = 7, nums = [2,3,1,2,4,3]       
> 输出: 2     
> 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。


### 解法
```javascript 1.8
let minSubArrayLen = function (s,nums) {
    let res = Infinity;
    let left = 0,right = 0,sum = 0,len = nums.length;
    while (right < len){
        while (right < len && sum < s){
            sum = sum + nums[right];
            right ++;
        }
        while (sum >= s){
            res = Math.min(res,right - left);
            sum = sum - nums[left];
            left ++;
        }
    }
    return res === Infinity ? 0 : res;
};
```