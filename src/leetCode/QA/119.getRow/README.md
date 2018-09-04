
## 杨辉三角 II
> 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

![avatar](https://raw.githubusercontent.com/chenqf/technical-summary/master/src/leetCode/QA/119.getRow/img.gif)

### 示例 1
> 输入: 3     
> 输出: [1,3,3,1]


### 解法
```javascript 1.8
let getRow = function (numRows) {
    let res = [];
    for(let i = 0; i<=numRows; i++){
        let l = i + 1;//几个元素
        let r = [];
        r[0] = 1;
        if(i >= 2){
            for(let j = 0;j<res.length -1; j++){
                r.push(res[j] + res[j + 1])
            }
        }
        r[l - 1] = 1;
        res = r;
    }
    return res;
};
```
