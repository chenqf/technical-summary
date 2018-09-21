
##  最长连续递增序列
> 给定一个未经排序的整数数组，找到最长且连续的的递增序列。      

### 示例 1
> 输入: [1,3,5,4,7]           
> 输出: 3         
> 解释: 最长连续递增序列是 [1,3,5], 长度为3。尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。               

### 示例 2
> 输入: [2,2,2,2,2]           
> 输出: 1          
> 解释: 最长连续递增序列是 [2], 长度为1。          
   

### 注意：
+ 数组长度不会超过10000。

### 解法
```javascript 1.8
var findLengthOfLCIS = function(nums) {
    let i = 0,
        left = 0,
        right = 0,
        tempLeft = 0,
        tempRight = 0,
        len = nums.length;
    if(!len){
        return 0;
    }
    while (i < len - 1){
        let cur = nums[i],
            next = nums[i + 1];
        if(cur < next){
            tempLeft = i;
            tempRight = i + 1;
            let min = next - cur;
            i++;
            while (i<nums.length - 1 && nums[i] < nums[i+1]){
                tempRight = i + 1;
                i++
            }
            if(tempRight - tempLeft > right - left){
                left = tempLeft;
                right = tempRight;
            }
        }else{
            i++;
        }
    }
    return right - left + 1;
};
```
