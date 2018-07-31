
## 三数之和
> 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。   

### 注意
> 答案中不可以包含重复的三元组。   
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，  
满足要求的三元组集合为：    
[   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-1, 0, 1],   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-1, -1, 2]   
]

### 具体求解算法
```javascript 1.8
let threeSum = function(nums,n = 0) {
    let result = [];
    let len = nums.length;
    if(!len) return result;
    nums.sort((a,b)=>a-b);
    for(let k = 0; k<len; k++){
        if(k>0 && nums[k-1] === nums[k]){
            continue;
        }
        let target = n - nums[k];
        let i = k + 1;
        let j = len -1;
        while(i<j){
            if(nums[i] + nums[j] === target){
                result.push([nums[k],nums[i],nums[j]]);
                while (i<j && nums[i] === nums[i+1]) i++;
                while (i<j && nums[j] === nums[j-1]) j--;
                i++;
                j--;
            }else if(nums[i] + nums[j] > target){
                j--;
            }else{
                i++
            }
        }
    }
    return result;
};

```
