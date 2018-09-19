
## 三个数的最大乘积
> 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。  

### 示例 1
> 输入: [1,2,3]           
> 输出: 6    

### 示例 1
> 输入: [1,2,3,4]                 
> 输出: 24    
    
### 注意
+ 给定的整型数组长度范围是[3,Math.pow(10,4)]，数组中所有的元素范围是[-1000, 1000]。
+ 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。

### 解法
```javascript 1.8
let maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    let len = nums.length;
    let p1 = nums[0] * nums[1] * nums[len - 1];
    let p2 = nums[len - 1] * nums[len - 2] * nums[len - 3];
    return Math.max(p1,p2)
};
```
