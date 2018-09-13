
## 汇总区间
> 给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。 

### 示例 1:
> 输入: [0,1,2,4,5,7]         
> 输出: ["0->2","4->5","7"]       
> 解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。

### 示例 2:
> 输入: [0,2,3,4,6,8,9]       
> 输出: ["0","2->4","6","8->9"]       
> 解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。     


### 解法
```javascript 1.8
let summaryRanges = function(nums) {
    let res = [];
    let len = nums.length;
    let i = 0,j = 0;
    while (i<len){
        while(j + 1 < len && nums[j] + 1 === nums[j + 1]){
            j++;
        }
        if(i === j){
            res.push(`${nums[i]}`)
        }else{
            res.push(`${nums[i]}->${nums[j]}`)
            i = j;
        }
        i++;
        j++;
    }
    return res;
};
```