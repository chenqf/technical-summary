
## 子集
> 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。    
> 说明：解集不能包含重复的子集。

### 示例:
> 输入: nums = [1,2,3]
> 输出: [[3],[1],[2],[1,2,3],[1,3],[2,3],[1,2],[]]


### 解法
```javascript 1.8
let helper = function (nums,index,cur,res) {
    res.push(cur);
    for(let i = index; i<nums.length; i++){
        helper(nums,i + 1,[...cur,nums[i]],res);
    }
};

let subsets = function(nums) {
    let res = [];
    helper(nums,0,[],res);
    return res;
};
```
