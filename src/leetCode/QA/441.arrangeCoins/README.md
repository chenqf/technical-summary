
## 排列硬币
> 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。      
> 给定一个数字 n，找出可形成完整阶梯行的总行数。              
> n 是一个非负整数，并且在32位有符号整型的范围内。        

### 示例 1
> 输入：n = 5     
> 输出：2      
> 解释：因为第三行不完整，所以返回2.

### 示例 2
> 输入：n = 8     
> 输出：3      
> 解释：因为第四行不完整，所以返回3.
     

### 解法
```javascript 1.8
let arrangeCoins = function (n) {
    let left = 1,
        right = n;
    if(!n) return n;
    while (left <= right){
        let mid = ~~((left + right)/2);
        let cur = mid * (mid + 1) / 2;
        if(cur === n){
            return mid;
        }else if(cur > n){
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    return left - 1;
};
```
