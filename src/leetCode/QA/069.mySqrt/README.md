
## x 的平方根
> 实现 int sqrt(int x) 函数。        
> 计算并返回 x 的平方根，其中 x 是非负整数。      
> 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

### 示例 1
> 输入: 4          
> 输出: 2


### 示例 2
> 输入: 8     
> 输出: 2     
> 说明: 8 的平方根是 2.82842...,由于返回类型是整数，小数部分将被舍去。   
       

### 解法
```javascript 1.8
let  mySqrt = function (x) {
    if(x === 0 || x === 1){
        return x;
    }
    let left = 1,right = x;
    while (left <= right){
        let mid = ~~((left + right)/2);
        let cur = mid * mid;
        if(cur === x){
            return mid;
        }else if(cur > x){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left - 1;
}
```
