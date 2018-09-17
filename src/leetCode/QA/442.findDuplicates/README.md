
## 数组中重复的数据
> 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。      
> 找到所有出现两次的元素。      
> 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？      

### 示例 1
> 输入：[4,3,2,7,8,2,3,1]      
> 输出：[2,3]  
   

### 解法
```javascript 1.8
let findDuplicates = function (nums) {
    let res = [];
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = Math.abs(nums[i]);
        let curIndex = cur - 1;
        if(nums[curIndex] < 0){
            res.push(cur);
        }
        nums[curIndex] = -nums[curIndex];
    }
    return res;
};
```
