
## 划分字母区间
> 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。  

### 示例 1
> 输入: S = "ababcbacadefegdehijhklij"            
> 输出: [9,7,8]       
> 解释:   
>> 划分结果为 "ababcbaca", "defegde", "hijhklij"。        
>> 每个字母最多出现在一个片段中。      
>> 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。     


### 解法 1 
```javascript 1.8
let partitionLabels = function(S) {
    let len = S.length;
    let map = new Map();
    let res = [];
    for(let i = 0;i<len; i++){
        map.set(S[i],(map.get(S[i]) || 0) + 1)
    }

    let i = 0;
    while (i < len){
        let m = new Map();
        let j = i;
        while (j < len){
            let cur = S[j];
            let num = map.get(cur);
            let count = m.get(cur);
            if(num > 1 && !count){
                m.set(cur,num - 1);
            }else if(num > 1 && count){
                count--;
                if(!count){
                    m.delete(cur)
                }else{
                    m.set(cur,count);
                }
            }
            if(!m.size){
                res.push(j - i + 1);
                i = j + 1;
                break;
            }else{
                j++;
            }
        }
    }
    return res;
};
```

### 解法 2
```javascript 1.8
let partitionLabels = function(S) {
    let len = S.length;
    let map = new Map();
    let res = [];
    for(let i = 0;i<len; i++){
        map.set(S[i],i);
    }
    let start = 0,last = 0;
    for(let i = 0;i<len; i++){
        last = Math.max(last,map.get(S[i]));
        if(i === last){
            res.push(last - start + 1);
            start = last + 1;
        }
    }
    return res;
};
```
