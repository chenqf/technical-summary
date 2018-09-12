
## 搜索二维矩阵
> 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
+ 每行中的整数从左到右按升序排列。
+ 每行的第一个整数大于前一行的最后一个整数。

### 示例 1：
> matrix = [[1,   3,  5,  7],[10, 11, 16, 20],[23, 30, 34, 50]]             
> target = 3            
> 输出: true          

### 示例 2：
> matrix = [[1,   3,  5,  7],[10, 11, 16, 20],[23, 30, 34, 50]]             
> target = 13               
> 输出: false



### 解法
```javascript 1.8
let searchMatrix = function(matrix, target) {
    let len = matrix.length,
        left = 0,
        right = len - 1,
        array = [];
    
    while (left <= right){
        let mid = ~~((left + right)/2),
            start = matrix[mid][0],
            end = matrix[mid][ matrix[mid].length - 1];
        if(start <= target && end >= target){
            array = matrix[mid];
            break;
        }else if(target < start){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    if(!array.length){
        return false;
    }
    return array.indexOf(target) >= 0;
};
```
