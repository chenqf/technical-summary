
## 重构字符串
> 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。
> 若可行，输出任意可行的结果。若不可行，返回空字符串。

### 示例 1
> 输入: S = "aab"         
> 输出: "aba"     

### 示例 2
> 输入: S = "aaab"        
> 输出: ""        

### 注意
+ S 只包含小写字母并且长度在[1, 500]区间内。

### 解法 
```javascript 1.8
let reorganizeString = function (S) {
    if(!S){
        return S;
    }
    let map = new Map();
    let list = [];
    let len = S.length;
    for(let i = 0; i<len; i++){
        map.set(S.charAt(i),(map.get(S.charAt(i)) || 0) + 1);
    }
    for(let [key,value] of map){
        list.push({
            key,
            value
        })
    }
    list.sort((a,b)=>a.value - b.value);
    let max = list[list.length - 1].value;
    if(max > Math.ceil(len/2)){
        return '';
    }
    let res = '';
    let first,second;
    while (res.length < len){
        if(first && !second){
            list.push(first);
            list.sort((a,b)=>a.value - b.value);
        }
        if(!first && second){
            list.push(second);
            list.sort((a,b)=>a.value - b.value);
        }
        if(!first && !second){
            first = list.pop();
            second = list.pop();
        }
        if(first){
            res = res + first.key;
            first.value --;
            if(!first.value){
                first = null;
            }
        }
        if(second){
            res = res + second.key;
            second.value --;
            if(!second.value){
                second = null;
            }
        }
    }
    return res;
};
```
