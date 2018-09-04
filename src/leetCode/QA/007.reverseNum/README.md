
## 反转整数。
> 给定一个 32 位有符号整数，将整数中的数字进行反转。

### 示例1
> 输入: 123    
> 输出: 321
### 示例2
> 输入: -123  
> 输出: -321
### 示例3
> 输入: 120 
> 输出: 21

### 入参
> 时间复杂度 O(n²)、空间复杂度 O(1)
```javascript 1.8
let num = 1234;
```

### 具体求解算法
```javascript 1.8
let reverse = function (num) {
    //符号，正数为true，负数为false
    let point = num >= 0;
    let absNumString = String(Math.abs(num));
    let result = Array.prototype.reduceRight.call(absNumString,(a,b)=>{
        return a + b;
    },'') * (point?1:-1);
    let resultNum = parseInt(result);
    if(resultNum >= -(2**31) && resultNum <= 2**31-1){
        return resultNum;
    }else {
        return 0;
    }
};
```
### 验证
```javascript 1.8
console.log(reverse(num))
```