
## 最小覆盖子串
> 给定一个字符串 S 和一个字符串 T，请在 S 中找出包含 T 所有字母的最小子串。

### 示例：
> 输入: S = "ADOBECODEBANC", T = "ABC"
> 输出: "BANC"

### 说明：
+ 如果 S 中不存这样的子串，则返回空字符串 ""。
+ 如果 S 中存在这样的子串，我们保证它是唯一的答案。


### 解法
```javascript 1.8
let minWindow = function (s,t) {
    let res_left,res_right;
    let left = 0,right = -1;
    let count = 0;
    let map = new Map();
    let len = s.length;
    for(let i = 0 ; i<t.length; i++){
        let cur = t[i];
        if(map.has(cur)){
            map.set(cur,map.get(cur) + 1)
        }else{
            count++;
            map.set(cur,1)
        }
    }
    while (right < len){
        if(count){
            right++;
            let cur = s[right];
            let n = map.get(cur);
            if(n !== undefined){
                let r = n - 1;
                if(r === 0){
                    count--;
                }
                map.set(cur,r);
            }
        }else{
            if((!res_left && !res_right) || right - left <  res_right - res_left){
                res_left = left;
                res_right = right;
            }
            let cur = s[left++];
            let n = map.get(cur);
            if(n !== undefined){
                map.set(cur,n+1);
                if(n >= 0){
                    count++;
                }
            }
        }
    }
    return s.slice(res_left,res_right + 1)
};
```
