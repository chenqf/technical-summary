
## 移动零
> 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

### 示例 1
> 输入: [0,1,0,3,12]      
> 输出: [1,3,12,0,0]      


### 说明
+ 必须在原数组上操作，不能拷贝额外的数组。
+ 尽量减少操作次数。

### 解法
```javascript 1.8
let moveZeroes = function (nums) {
    let len = nums.length;
    let j = 0;
    for(let i = 0;i<len; i++){
        let cur = nums[i];
        if(cur){
            nums[j++] = cur;
        }
    }
    while (j<len){
        nums[j++] = 0;
    }
};
```