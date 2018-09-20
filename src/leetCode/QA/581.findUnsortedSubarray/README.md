
## 最短无序连续子数组
> 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。     
> 你找到的子数组应是最短的，请输出它的长度。

### 示例 1
> 输入: [2, 6, 4, 8, 10, 9, 15]       
> 输出: 5     
> 解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。                

### 注意：
+ 输入的数组长度范围在 [1, 10,000]。   
+ 输入的数组可能包含重复元素 ，所以升序的意思是<=。

### 解法
```javascript 1.8
let findUnsortedSubarray = function(nums) {
    let start = -1,
        end = -2,
        len = nums.length,
        left = nums[0],
        right = nums[len - 1];
    for(let i = 0;i<len;i++){
        let leftVal = nums[i],
            rightVal = nums[len - i - 1];
        left = Math.max(left,leftVal);
        right = Math.min(right,rightVal);
        if(left > leftVal){
            end = i;
        }
        if(right<rightVal){
            start = len - i - 1;
        }
    }
    return end - start + 1;
};
```
