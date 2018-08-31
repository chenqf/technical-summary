
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
var minWindow = function (s,t) {
    let sumLen = Infinity;
    let compareMap = function (m1,m2) {
        for(let [key,value] of m1){
            if(!m2.get(key) || m2.get(key) < value){
                return false;
            }
        }
        return true;
    };
    let res_left,res_right;
    let baseMap = new Map();
    let baseLen = t.length;
    for(let i = 0; i<baseLen; i++){
        baseMap.set(t[i],(baseMap.get(t[i]) || 0) + 1)
    }
    let len = s.length;
    let left = 0,right = 0;
    let map = new Map();
    while (right < len){
        let cur = s[right++];
        map.set(cur,(map.get(cur) || 0) + 1);
        if(compareMap(baseMap,map)){
            break;
        }
    }
    while (left < right && left < len && right <= len){
        while (left < right && compareMap(baseMap,map)){
            if(right - left < sumLen){
                sumLen = right - left;
                res_left = left;
                res_right = right - 1;
            }
            let cur = s[left++];
            map.set(cur,map.get(cur) - 1);
        }
        if(right === len){
            right++;
        }
        while (right < len){
            let cur = s[right++];
            map.set(cur,(map.get(cur) || 0) + 1);
            if(compareMap(baseMap,map)){
                break;
            }
        }
    }
    return s.slice(res_left,res_right + 1)
};
```
