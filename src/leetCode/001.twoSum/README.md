
##给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
>给定 nums = [2, 7, 11, 15], target = 9
>返回 [0,1]

```javascript 1.8
let nums = [2, 7, 11, 15],
    target = 9;
```
***

###暴力求解法
```javascript 1.8
let twoSum = function (nums, target) {
    for (let i = 0, len = nums.length; i < len; i++) {
        let item = nums[i];
        //此处需要指定indexOf检索的起始位置
        let index = nums.indexOf(target - item,i+1);
        if(~index){
            return [i,index]
        }
    }
};
```
> 时间复杂度 O(n²)
***

