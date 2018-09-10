
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
let searchArray = function (matrix,target,start = 0,end = matrix.length - 1) {
    if(start < 0 || start > end || end >= matrix.length){
        return false;
    }
    let mid = ~~(((start + end))/2),
        midList = matrix[mid];
    if(midList[0] <= target && midList[midList.length - 1] >= target){
        return midList;
    }else if(target < midList[0]){
        return searchArray(matrix,target,start,mid - 1);
    }else if(target > midList[midList.length - 1]){
        return searchArray(matrix,target,mid + 1,end);
    }
};


let searchMatrix = function(matrix, target) {
    let array = searchArray(matrix,target);
    if(!array){
        return false;
    }
    //此处可以继续使用二分法查找
    return array.indexOf(target) >= 0;
};
```
