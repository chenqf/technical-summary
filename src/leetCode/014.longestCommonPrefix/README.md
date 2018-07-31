
## 最长公共前缀
> 编写一个函数来查找字符串数组中的最长公共前缀。   
> 如果不存在公共前缀，返回空字符串 ""。

### 示例1
> 输入: ["flower","flow","flight"]       
> 输出: "fl"
### 示例2
> 输入: ["dog","racecar","car"]         
> 输出: ""    
> 解释: 输入不存在公共前缀。

### 说明
> 所有输入只包含小写字母 a-z 。




### 具体求解算法
```javascript 1.8
let longestCommonPrefix = function(strs) {
    let firstStr = strs[0];
    let result ='';
    if(!strs.length){
        return result;
    }
    for (let i = 0; i < firstStr.length; i++) {
        for (let j =  1; j < strs.length; j++) {
            if(firstStr.charAt(i) !== strs[j].charAt(i)){
                return result;
            }
        }
        result = result + firstStr.charAt(i);
    }
    return result;

};

```
