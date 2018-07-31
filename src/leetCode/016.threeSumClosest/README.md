
## 最接近的三数之和
> 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。   

### 例如
> 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.     
> 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

### 具体求解算法
```javascript 1.8
let threeSumClosest = function(nums, target) {
    let result = Infinity;
    let len = nums.length;
    if(len <= 3){
        return nums.reduce((a,b)=>a+b,0);
    }
    nums.sort((a,b)=>a-b);
    for(let k = 0; k<len-2; k++){
        if(k>0 && nums[k-1] === nums[k]){
            continue;
        }
        let i = k + 1;
        let j = len -1;
        while(i<j){
            let count = nums[k] + nums[i] + nums[j];
            if(count === target){
                return target;
            }
            if(Math.abs(result - target) > Math.abs(count - target)){
                result = count;
            }
            if(count > target){
                j--
            }else{
                i ++
            }
        }
    }
    return result;
};

```
