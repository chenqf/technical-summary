
## 最大连续1的个数
> 给定一个二进制数组， 计算其中最大连续1的个数。       

### 示例 1
> 输入: [1,1,0,1,1,1]     
> 输出: 3         
> 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.        
  
### 注意：
+ 输入的数组只包含 0 和1。
+ 输入数组的长度是正整数，且不超过 10,000。

### 解法
```javascript 1.8
let findMaxConsecutiveOnes = function(nums) {
    let i = 0,j = 0,res = 0,len = nums.length;
    while (i < len && j < len) {
        if (nums[i] === 0) {
            i++;
            j++;
        } else if (nums[i] === 1) {
            while (j + 1 < len && nums[j + 1] === 1){
                j++
            }
            res = Math.max(res,j - i + 1);
            i = j = j + 1;
        }
    }
    return res;
};
```
