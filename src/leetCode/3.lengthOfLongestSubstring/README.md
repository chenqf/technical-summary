
## 给定一个字符串，找出不含有重复字符的最长子串的长度。
> 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。   
> 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。    
> 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串

### 暴力求解法
```javascript 1.8
let lengthOfLongestSubstring = function (str) {
    let result = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let set = new Set();
        set.add(str.charAt(i));
        for (let j = i + 1; j < len; j++) {
            if (set.has(str.charAt(j))) {
                break;
            }
            set.add(str.charAt(j));
        }
        result = Math.max(result,set.size);
    }
    return result;
};
```

### 验证
```javascript 1.8
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
```