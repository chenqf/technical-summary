
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
    if(num === 1){
        return true;
    }
    let left = 1,right = num;
    while (left < right - 1){
        let mid = ~~((left + right)/2);
        let cur = Math.pow(mid ,2);
        if(cur === num){
            return true;
        }else if(cur > num){
            right = mid;
        }else if(cur < num){
            left = mid;
        }
    }
    if(Math.pow(left,2) === num || Math.pow(right,2) === num){
        return true;
    }else{
        return false;
    }
};
```
