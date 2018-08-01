
## 括号生成
> 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。  
>> 例如，给出 n = 3，生成结果为：
>>> [   
>>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"((()))",   
>>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"(()())",   
>>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"(())()",   
>>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"()(())",   
>>> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"()()()"    
>>> ]


### 递归函数
```javascript 1.8
/**
 * 递归函数
 * @param left  剩余的左括号
 * @param right 剩余的又括号
 * @param str  当前已拼装括号的字符串
 * @param list  最终结果集
 */
let helper = function (left,right,str,list) {
    //当前右括号大于左括号
    if (left > right){
        return ;
    }
    //左括号，右括号均无剩余，作为终值填充
    if(left === 0 && right === 0){
        list.push(str);
        return ;
    }
    //左括号有剩余
    if(left > 0){
        helper(left - 1,right,str + '(',list);
    }
    //右括号有剩余
    if(right > 0){
        helper(left,right - 1,str + ')',list);
    }
};
```
### 求解调用
```javascript 1.8
let generateParenthesis = function(n) {
    let list = [];
    helper(n,n,'',list);
    return list;
};
```