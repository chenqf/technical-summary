
## 反转字符串中的元音字母
> 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

### 示例 1
> 输入: "hello"       
> 输出: "holle"

### 示例 2
> 输入: "leetcode"        
> 输出: "leotcede"

### 解法
```javascript 1.8
let reverseVowels = function(s) {
    let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let list = [...s];
    let len = list.length;
    if(len <= 1){
        return s;
    }
    let i = 0,j = len - 1;
    while (i<j){
        while (!set.has(list[i]) && i<j){
            i++;
        }
        while (!set.has(list[j]) && i<j){
            j--;
        }
        if(i<j){
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
            i++;
            j--;
        }

    }
    return list.join('');
};
```