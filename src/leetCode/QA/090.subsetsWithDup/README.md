
## 子集 II
> 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。  

### 说明
> 解集不能包含重复的子集。

### 示例 1
> 输入: [1,2,2]   
> 输出:[ [2] , [1] , [1,2,2] , [2,2] , [1,2] , [] ]


### 解法
```javascript 1.8
let helper = function (nums,index,cur,res) {
    res.push(cur);
    let len = nums.length;
    for(let i = index;i<len;i++){
        if(i === index || nums[i - 1] !== nums[i]){
            helper(nums,i + 1,[...cur,nums[i]],res);
        }
    }
};

let subsetsWithDup = function (nums) {
    let res = [];
    nums.sort((a,b)=>a-b);
    helper(nums,0,[],res);
    return res;
};
```
