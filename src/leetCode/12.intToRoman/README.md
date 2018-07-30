
## 整数转罗马数字。
> 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

| 字符 | 数值 | 
| :------: | :------: | 
| I | 1 |
| V | 5 | 
| X | 10 | 
| L | 50 | 
| C | 100 | 
| D | 500 | 
| M | 1000 | 

>例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

>通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

+ I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
+ X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
+ C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

> 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

### 示例1
> 输入:  3        
> 输出: "III"
### 示例2
> 输入: 4         
> 输出: IV

### 示例3
> 输入: 9 
> 输出: IX

### 示例3
> 输入: 58        
> 输出: LVIII     
> 解释: C = 100, L = 50, XXX = 30, III = 3.

### 示例4
> 输入: 1994        
> 输出: MCMXCIV     
> 解释: M = 1000, CM = 900, XC = 90, IV = 4.



### 具体求解算法
```javascript 1.8
let getMap = function () {
    return {
        1:'I',
        4:'IV',
        5:'V',
        9:'IX',
        10:'X',
        40:'XL',
        50:'L',
        90:'XC',
        100:'C',
        400:'CD',
        500:'D',
        900:'CM',
        1000:'M'
    };
};

```
```javascript 1.8
let match = function (result,num) {
    let obj = getMap();
    while (result.num >= num){
        let n = parseInt(result.num /num);
        result.num = result.num % num;
        result.str = result.str + obj[num].repeat(n);
    }
};
```
```javascript 1.8
let intToRoman = function (num) {
    if(num < 1 || num > 3999) throw Error('error');
    let obj = getMap();
    if(num in obj) return obj[num];
    let result = {
        str:'',
        num
    };
    match(result,1000);
    match(result,900);
    match(result,500);
    match(result,400);
    match(result,100);
    match(result,90);
    match(result,50);
    match(result,40);
    match(result,10);
    match(result,9);
    match(result,5);
    match(result,4);
    match(result,1);

    return result.str;
};
```