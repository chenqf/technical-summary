
## 螺旋矩阵 II
> 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。      

### 示例 1
> 输入: 3         
> 输出:
> [     
>    &nbsp;&nbsp;&nbsp;&nbsp;[ 1, 2, 3 ],               
>    &nbsp;&nbsp;&nbsp;&nbsp;[ 8, 9, 4 ],                   
>    &nbsp;&nbsp;&nbsp;&nbsp;[ 7, 6, 5 ]          
> ]     


### 解法
```javascript 1.8
let generateMatrix = function(n) {
    let i = 0,//从左到右用到的行
        j = 0,//从上到下用到的列
        ii = 0,//从右到左用到的行
        jj = 0,//从下到上用到的列
        cur = 1,//当前需要加入的数据
        res = [];
    for(let k = 0;k<n; k++){
        res[k] = [];
    }
    while (cur<=n*n){
        //从左到右
        for(let k = jj;k<n - j && cur <=n*n;k++){
            res[i][k] = cur;
            cur++;
        }
        i++;
        //从上到下
        for(let k = i; k<n - ii && cur <= n*n; k++){
            res[k][n - 1 - j] = cur;
            cur++;
        }
        j++;
        //从右到左
        for(let k = n - 1 - j;k>=jj && cur <= n*n; k--){
            res[n - 1 - ii][k] = cur;
            cur++;
        }
        ii++;
        //从下到上
        for(let k = n - 1 - ii; k>=i && cur < n*n; k--){
            res[k][jj] = cur;
            cur ++;
        }
        jj++;
    }
    return res;
};
```