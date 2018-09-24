
## 只出现一次的数字
> 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。       


### 示例1
> 输入: [2,2,1]               
> 输出: 1     

### 示例2
> 输入: [4,1,2,1,2]       
> 输出: 4


### 解法
```javascript 1.8
let singleNumber = function(nums) {
    let map = new Map();
    for(let i = 0 ,len= nums.length; i<len; i++){
        let cur = nums[i];
        if(map.has(cur)){
            map.delete(cur);
        }else{
            map.set(cur,1);
        }
    }
    for(let [key] of map){
        return key;
    }
};
```