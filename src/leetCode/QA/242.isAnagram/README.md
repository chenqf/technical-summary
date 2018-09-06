
## 有效的字母异位词
> 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。        

### 示例 1
> 输入: s = "anagram", t = "nagaram"      
> 输出: true     

### 示例 2
> 输入: s = "rat", t = "car"          
> 输出: false

### 说明
+你可以假设字符串只包含小写字母。

### 解法
```javascript 1.8
let isAnagram = function(s, t) {
    let l1 = [...s].sort();
    let l2 = [...t].sort();
    return l1.join() === l2.join();
};
```