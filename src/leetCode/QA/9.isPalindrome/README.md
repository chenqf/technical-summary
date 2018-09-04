
## 判断是否为回文数。
> 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。  

### 示例1
> 输入: 121
> 输出: true
### 示例2
> 输入: -121
> 输出: false
> 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
### 示例3
> 输入: 10  
> 输出: false  
> 解释: 从右向左读, 为 01 。因此它不是一个回文数。


### 具体求解算法
```javascript 1.8
let isPalindrome = function(num) {
     let str = String(num);
     let reverseStr = str.split('').reverse().join('');
     return str === reverseStr;
 };
```