
## 旋转图像
> 给定一个 n × n 的二维矩阵表示一个图像。       
> 将图像顺时针旋转 90 度。

### 示例 1
> 给定 matrix =       
> [     
>    &nbsp;&nbsp;&nbsp;&nbsp;[1,2,3],            
>    &nbsp;&nbsp;&nbsp;&nbsp;[4,5,6],            
>    &nbsp;&nbsp;&nbsp;&nbsp;[7,8,9]         
> ]     
> 原地旋转输入矩阵，使其变为:            
> [         
>    &nbsp;&nbsp;&nbsp;&nbsp;[7,4,1],            
>    &nbsp;&nbsp;&nbsp;&nbsp;[8,5,2],            
>    &nbsp;&nbsp;&nbsp;&nbsp;[9,6,3]     
> ]     

### 说明：
> 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。



### 解法
```javascript 1.8
let rotate = function(matrix) {
    let len = matrix.length;
    let list = [];
    for(let i = 0; i<len; i++){
        for(let j = 0; j<len ;j++){
            let cur = matrix[i][j];
            list.push({
                i:j,
                j:len - 1 - i,
                cur
            })
        }
    }
    for(let k = 0; k<list.length; k++){
        let item = list[k],
            i = item.i,
            j = item.j;
        matrix[i][j] = item.cur;
    }
};
```