
## Pow(x,n)
> 实现 pow(x, n) ，即计算 x 的 n 次幂函数。

### 示例 1
> 输入: 2, 10       
> 输出: 1024     

### 示例 2
> 输入: 2.1 , 3          
> 输出: 9.261

### 示例 3
> 输入: 2 , -2       
> 输出: 0.25


### 解法
```javascript 1.8
let myPow = function (x, n) {
    return n < 0 ? 1/power(x,Math.abs(n)):power(x,n)
};

let power = function (x,n) {
    if(n === 0){
        return 1;
    }
    if(n === 1){
        return x;
    }
    let flg = !!(n % 2);//true 奇次方，false 偶次方
    let item = power(x,~~(n/2));
    return flg ? item * item * x : item * item;
};
```
