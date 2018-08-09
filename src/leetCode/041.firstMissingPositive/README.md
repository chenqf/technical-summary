
## 缺失的第一个正数
> 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。  

### 示例 1
> 输入: [1,2,0]   
> 输出: 3
### 示例 2
> 输入: [3,4,-1,1]    
> 输出: 2
### 示例 3
> 输入: [7,8,9,11,12] 
> 输出: 1


### 解法
```javascript 1.8
let firstMissingPositive = function (nums) {
    let len = nums.length;
    if(!len){
        return 1;
    }
    let list = [];
    for(let i = 0; i<len; i++){
        let val = nums[i];
        if(val >= 0){
            list[val] = 1;
        }
    }
    let length = list.length;
    for(let i = 0; i < length; i++){
        if(i>0 && !list[i]){
            return i;
        }
    }
    return list.length;
};
```
