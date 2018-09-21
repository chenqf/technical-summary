
##  数组的度
> 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。        
> 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

### 示例 1
> 输入: [1, 2, 2, 3, 1]           
> 输出: 2     
> 解释: 输入数组的度是2，因为元素1和2的出现频数最大，均为2.      
>> 连续子数组里面拥有相同度的有如下所示:      
>> [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]        
>> 最短连续子数组[2, 2]的长度为2，所以返回2.

### 示例 2
> 输入: [1,2,2,3,1,4,2]           
> 输出: 6          
   

### 注意：
+ nums.length 在1到50,000区间范围内。       
+ nums[i] 是一个在0到49,999范围内的整数。

### 解法
```javascript 1.8
let findShortestSubArray = function(nums) {
    let map = new Map();
    let maxSum = 0;
    let res = Infinity;
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = nums[i];
        let obj;
        if(map.has(cur)){
            obj = map.get(cur);
            obj.right = i;
            obj.num = obj.num + 1;
        }else{
            obj = {left:i,right:i,num:1};
            map.set(cur,obj);
        }
        maxSum = Math.max(maxSum,obj.num);
    }
    for([key,value] of map){
        if(value.num === maxSum){
            res = Math.min(res,value.right - value.left + 1)
        }
    }
    return res;
};
```
