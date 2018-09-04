
## 通过删除字母匹配到字典里最长单词
> 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。  

### 示例 1
> 输入: s = "abpcplea", d = ["ale","apple","monkey","plea"]       
> 输出:"apple"

### 示例 2
> 输入: s = "abpcplea", d = ["a","b","c"]         
> 输出:"a"


### 解法
```javascript 1.8
let findLongestWord = function(s, d) {
    if(!s || !d.length){
        return '';
    }
    let res = '';
    for(let i = 0,len = d.length; i<len; i++){
        let k = 0;
        let word = d[i];
        for(let j = 0,l = s.length; j<l; j++){
            if(s[j] === word[k]){
                k++
            }
        }
        if(k === word.length){
            if(word.length > res.length){
                res = word;
            }else if(word.length === res.length){
                res = word[0].charCodeAt(0) < res[0].charCodeAt(0) ? word : res;
            }
        }
    }
    return res;
};
```
