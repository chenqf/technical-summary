
## 颜色分类
> 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。     
> 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

### 注意:
> 不能使用代码库中的排序函数来解决这道题。

### 示例 1
> 输入: [2,0,2,1,1,0]      
> 输出: [0,0,1,1,2,2] 


### 解法
```javascript 1.8
let sortColors = function (nums) {
    for(let i = 1,len = nums.length; i<len; i++){
        let j = i -1;
        let temp = nums[i];
        while (j >= 0 && nums[j] > temp){
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = temp;
    }
};
```
