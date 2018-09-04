
## 有效的括号
> 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

### 有效字符串需满足：
+ 左括号必须用相同类型的右括号闭合。
+ 左括号必须以正确的顺序闭合。
+ 注意空字符串可被认为是有效字符串。

### 示例 1
> 输入: "()"      
> 输出: true      

### 示例 2
> 输入:  "()[]{}"      
> 输出: true      

### 示例 3
> 输入: "(]"      
> 输出: false      

### 示例 4
> 输入: "([)]"      
> 输出: false      

### 示例 5
> 输入: "{[]}"     
> 输出: true      


### 解法
```javascript 1.8
let isValid = function(s) {
    if(!s){
        return true;
    }
    let array = [];
    for(let i = 0,len = s.length; i<len; i++){
        let cur = s.charAt(i);
        if(cur === '(' || cur === '{' || cur === '['){
            array.push(cur);
        }else if(!array.length){
            return false;
        }else{
            let pre = array.pop();
            if(pre === '(' && cur !== ')'){
                return false;
            }
            if(pre === '{' && cur !== '}'){
                return false;
            }
            if(pre === '[' && cur !== ']'){
                return false;
            }
        }
    }
    return !array.length
};
```
