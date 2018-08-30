
##  反转字符串
> 编写一个函数，其作用是将输入的字符串反转过来。

### 示例 1
> 输入: "hello"       
> 输出: "olleh"       

### 示例 2
> 输入: "A man, a plan, a canal: Panama"          
> 输出: "amanaP :lanac a ,nalp a ,nam A"      

### 解法
```javascript 1.8
let reverseString = function(s) {
    let i = 0,j = s.length - 1;
    let list = s.split('');
    while (i < j){
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        i++;
        j--;
    }
    return list.join('');
};
```