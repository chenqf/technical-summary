
## 字符串的排列
> 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。      
> 换句话说，第一个字符串的排列之一是第二个字符串的子串。

### 示例 1
> 输入: s1 = "ab" s2 = "eidbaooo"     
> 输出: True          
> 解释: s2 包含 s1 的排列之一 ("ba").        

### 示例 2
> 输入: s1= "ab" s2 = "eidboaoo"          
> 输出: False         

### 注意：
+ 输入的字符串只包含小写字母
+ 两个字符串的长度都在 [1, 10,000] 之间

### 解法
```javascript 1.8
let checkInclusion = function(s1, s2) {
    let len1 = s1.length;
    let len2 = s2.length;
    if(len1 > len2){
        return false;
    }

    function compareMap(m1 = new Map(),m2 = new Map()) {
        for(let [key,value] of m1){
            if(!m2.has(key) || m2.get(key) !== value){
                return false;
            }
        }
        return true;
    }

    let map = new Map();
    let m = new Map();
    for(let i = 0;i<len1; i++){
        map.set(s1[i],(map.get(s1[i]) || 0) + 1);
        m.set(s2[i],(m.get(s2[i]) || 0) + 1);
    }

    if(compareMap(map,m)){
        return true;
    }
    let deleteIndex = 0;
    for(let i = len1; i<len2; i++){
        let key = s2[deleteIndex];
        let cur = s2[i];
        m.set(key,m.get(key) - 1);
        m.set(cur,(m.get(cur) || 0) + 1 );
        deleteIndex++;
        if(compareMap(map,m)){
            return true;
        }
    }
    return false;
};
```
