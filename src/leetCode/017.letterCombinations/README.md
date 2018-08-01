
## 电话号码的字母组合
> 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。     
> 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

### 示例
> 输入："23"   
> 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

### 包装数字对应的英文字符串
```javascript 1.8
let obj = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz'
};
```
### 递归函数
```javascript 1.8
    /**
     * 递归函数
     * @param digits 传入的数字
     * @param index 当前是第几个数字
     * @param str 当前已拼装的字符串
     * @param list 结果集
     */
    let helper = function (digits,index,str,list) {
        if(str.length === digits.length){
            list.push(str);
            return false;
        }
        let strs = obj[digits[index]];
        for(let i = 0; i<strs.length; i++){
            helper(digits,index +1,str + strs.charAt(i),list)
        }
    };
```
### 求解调用
```javascript 1.8
let letterCombinations = function (digits) {
    let list = [];
    if(digits){
        helper(String(digits),0,'',list);
    }
    return list;
};
```
