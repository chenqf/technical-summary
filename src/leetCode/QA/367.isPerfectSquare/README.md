
## 有效的完全平方数
> 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

### 说明：
> 不要使用任何内置的库函数，如  sqrt。

### 示例 1
> 输入：16     
> true

### 示例 2
> 输入：14         
> false


### 解法
```javascript 1.8
let isPerfectSquare = function(num) {
    let left = 1,
        right = num;
    while (left <= right){
        let mid = ~~((left + right)/2);
        let cur = mid * mid;
        if(num === cur){
            return true;
        }else if(cur > num){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return false;
};
```
