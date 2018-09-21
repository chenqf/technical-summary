
## 图片平滑器
> 包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。

### 示例 1
> 输入:       
  [         
  &nbsp;&nbsp;&nbsp;[1,1,1],             
  &nbsp;&nbsp;&nbsp;[1,0,1],             
  &nbsp;&nbsp;&nbsp;[1,1,1]       
  ]                      
> 输出:           
  [         
   &nbsp;&nbsp;&nbsp;[0, 0, 0],         
   &nbsp;&nbsp;&nbsp;[0, 0, 0],         
   &nbsp;&nbsp;&nbsp;[0, 0, 0]          
  ]              
> 解释:                   
> 对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0            
> 对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0          
> 对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0           
   

### 注意：
+ 给定矩阵中的整数范围为 [0, 255]。
+ 矩阵的长和宽的范围均为 [1, 150]。

### 解法
```javascript 1.8
let imageSmoother = function(M) {
    let r = M.length,
        l = M[0].length,
        res = Array.from({length:r},()=>[]);
    for(let i = 0;i<r; i++){
        for(let j = 0; j<l; j++){
            let num = 9,
                top,
                right,
                bottom,
                left,
                leftTop,
                rightTop,
                leftBottom,
                rightBottom,
                cur = M[i][j];
            //上
            if(i > 0){
                top = M[i - 1][j];
            }else{
                top = 0;
                num --;
            }
            //右
            if(j < l - 1){
                right = M[i][j + 1]
            }else{
                right = 0;
                num --;
            }
            //下
            if(i < r - 1){
                bottom = M[i + 1][j];
            }else{
                bottom = 0;
                num --;
            }
            //左
            if(j > 0){
                left = M[i][j - 1];
            }else{
                left = 0;
                num --;
            }
            //左上
            if(j > 0 && i > 0){
                leftTop = M[i - 1][j - 1];
            }else{
                leftTop = 0;
                num --;
            }
            //左下
            if(j > 0 && i < r - 1){
                leftBottom = M[i + 1][j - 1];
            }else{
                leftBottom = 0;
                num --;
            }
            //右上
            if(j < l - 1 && i > 0){
                rightTop = M[i -1][j + 1];
            }else{
                rightTop = 0;
                num --;
            }
            //右下
            if(j < l - 1 && i < r - 1){
                rightBottom = M[i + 1][j + 1];
            }else{
                rightBottom = 0;
                num --;
            }
            res[i][j] = ~~((top+right+bottom+left+leftTop+rightTop+leftBottom+rightBottom+cur)/num)
        }
    }
    return res;
};
```
