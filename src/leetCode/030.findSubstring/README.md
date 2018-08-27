
## 与所有单词相关联的字串
> 给定一个字符串 s 和一些长度相同的单词 words。在 s 中找出可以恰好串联 words 中所有单词的子串的起始位置。     
> 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

### 示例 1
> 输入: s = "barfoothefoobarman",words = ["foo","bar"]        
> 输出: [0,9]     
> 解释: 从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。输出的顺序不重要, [9,0] 也是有效答案。

### 示例 2
> 输入: s = "wordgoodstudentgoodword",words = ["word","student"]      
> 输出: []     


### 解法
```javascript 1.8
let findSubstring = function(s, words) {
    let res = [];
    let num = words.length;//共有几个单词
    if(!num){
        return res;
    }
    let len = words[0].length;//每个单词的长度
    let length = num * len;//匹配的字符串总长度
    let map = new Map();
    for(let i = 0; i<num; i++){
        if(map.has(words[i])){
            map.set(words[i],map.get(words[i]) + 1)
        }else{
            map.set(words[i],1)
        }
    }
    for(let i = 0; i < s.length - length + 1; i++){
        let m = new Map();
        let count = 0;
        for(let j = i; j<s.length; j = j + len){
            let str = s.substr(j,len);
            //匹配的字符串不在条件内，索引 i 移动
            if(!map.has(str)){
                break;
            }
            if(m.has(str)){
                m.set(str,m.get(str) + 1);
            }else{
                m.set(str,1);
            }
            if(m.get(str) > map.get(str)){
                break;
            }
            count ++ ;
        }
        if(count === num){
            res.push(i)
        }
    }
    return res
};
```
