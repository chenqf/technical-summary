
##  摆动排序 II
> 给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

### 示例 1
> 输入: nums = [1, 5, 1, 1, 6, 4]     
> 输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]       

### 示例 2
> 输入: nums = [1, 3, 2, 2, 3, 1]         
> 输出: 一个可能的答案是 [2, 3, 1, 3, 1, 2]           

### 说明
+你可以假设所有输入都会得到有效的结果。

### 解法
```javascript 1.8
let wiggleSort = function(nums) {
    nums.sort((a,b)=>a-b);
    let len = nums.length;
    if(len<2){
        return ;
    }
    let i = Math.ceil(len/2 - 1),
        j = len - 1,
        list = [];
    while (i>=0){
        list.push(nums[i]);
        if(list.length<len){
            list.push(nums[j])
        }
        i--;
        j--;
    }
    for(let i = 0; i<list.length; i++){
        nums[i] = list[i]
    }
};
```