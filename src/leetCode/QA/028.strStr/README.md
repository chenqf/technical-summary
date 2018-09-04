
## 实现strStr()
> 实现 strStr() 函数。       
> 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。


### 示例 1
> 输入: haystack = "hello", needle = "ll"     
> 输出: 2     

### 示例 2
> 输入: haystack = "aaaaa", needle = "bba"           
> 输出: -1    


### 说明
> 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。     
> 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
   

### 解法
```javascript 1.8
let strStr = function(haystack, needle) {
    if(needle === '') return 0;
    let len1 = haystack.length;
    let len2 = needle.length;
    if(len1 === len2) return haystack === needle ? 0 : -1;
    for(let i = 0; i<len1 - len2 + 1; i++){
        let index = i;
        let start = 0;
        while (haystack[index] === needle[start] && start < len2){
            index++;
            start++;
        }
        if(start === len2){
            return i;
        }
    }
    return -1;
};
```
