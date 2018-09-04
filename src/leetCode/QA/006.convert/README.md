
## Z字形变换(N字形)。
> 将字符串以Z字形排列成给定的行数：   

### 分析
> 将字母排成Z形状（Z竖起来），比如：
>> 字符串 ABCDEFGHIGKLMNO 排列成5行


![avatar](https://raw.githubusercontent.com/chenqf/technical-summary/master/src/leetCode/006.convert/img.png)


### 示例1
> 输入:  str = "PAYPALISHIRING", row = 3
> 输出: "PAHNAPLSIIGYIR"
### 示例2
> 输入: str = "PAYPALISHIRING", row = 4
> 输出: "PINALSIGYAHRPI"
> 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。



### 具体求解算法
```javascript 1.8
let convert = function (str,row = 1) {
    if(row === 1){
        return str;
    }
    let result = '';
    let len = str.length;
    let nodeLen = 2*row -2;
    for(let i = 0; i<row; i++){
        let j = i;
        if(i === 0 || i === row -1){
            while(j < len){
                result = result + str.charAt(j);
                j = j + nodeLen;
            }
        }else{
            let k = nodeLen - i;
            while (j <len){
                result = result + str.charAt(j);
                if(k<len){
                    result = result + str.charAt(k);
                }
                j = j + nodeLen;
                k = k + nodeLen;
            }
        }
    }
    return result;
};
```
