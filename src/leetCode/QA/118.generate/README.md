
## 杨辉三角
> 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

![avatar](https://raw.githubusercontent.com/chenqf/technical-summary/master/src/leetCode/QA/118.generate/img.gif)

### 示例 1
> 输入: 5 
> 输出:   
> [     
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1],      
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1,1],      
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1,2,1],      
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1,3,3,1],      
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1,4,6,4,1]   
> ]


### 解法
```javascript 1.8
let generate = function (numRows) {
    let res = [];
    for(let i = 0; i<numRows; i++){
        let l = i + 1;//几个元素
        let r = [];
        r[0] = 1;
        if(i >= 2){
            for(let j = 0;j<res[i - 1].length -1; j++){
                r.push(res[i - 1][j] + res[i - 1][j + 1])
            }
        }
        r[l - 1] = 1;
        res.push(r)
    }
    return res;
};
```
