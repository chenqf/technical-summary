
## 子数组最大平均数 I
> 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

### 示例 1
> 输入: [1,12,-5,-6,50,3], k = 4             
> 输出: 12.75         
> 解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

    
### 注意
+ 1 <= k <= n <= 30,000。
+ 所给数据范围 [-10,000，10,000]。

### 解法
```javascript 1.8
let findMaxAverage = function(nums, k) {
    let i = 0,
        j = 0,
        len = nums.length,
        sum = 0,
        res = -Infinity;
    while (i<len && j<len && j - i + 1 < k){
        sum = sum + nums[j];
        if(j - i + 1 === k){
            res = Math.max(res,sum/k);
            sum = sum - nums[i];
            i++;
        }
        j++;
    }
    return res;
};
```
