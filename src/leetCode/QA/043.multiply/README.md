
## 字符串相乘
> 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

### 示例 1
> 输入: num1 = "2", num2 = "3"    
> 输出: "6"   
   

### 示例 2
> 输入: num1 = "123", num2 = "456"    
> 输出: "56088"   

### 解释
> 计算超大数相乘，可以不受int或long的数值范围的约束

### 说明
+ num1 和 num2 的长度小于110。
+ num1 和 num2 只包含数字 0-9。
+ num1 和 num2 均不以零开头，除非是数字 0 本身。
+ **不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。**



### 解法
```javascript 1.8
let multiply = function (num1, num2) {
    let temp = [];
    let res = '';
    let len1 = num1.length,
        len2 = num2.length;

    for (let i = len1 - 1; i >= 0; i--) {
        let s1 = len1 - 1 - i;
        for(let j = len2 - 1; j>=0; j--){
            let s2 = len2 - 1 - j;
            temp[s1 + s2] = (temp[s1 + s2] || 0) + num1[i] * num2[j];
        }
    }
    for(let i = 0; i<temp.length; i++){
        let cur = temp[i];
        if(cur >= 10){
            temp[i + 1] = (temp[i + 1] || 0) + ~~(cur/10);
            temp[i] = cur%10;
        }
    }

    let i = temp.length - 1;
    while (i>=0){
        if(i=== 0 || temp[i] !== 0){
            temp.length = i + 1;
            break;
        }
        i--;
    }
    
    return temp.reverse().join('');
};
```
