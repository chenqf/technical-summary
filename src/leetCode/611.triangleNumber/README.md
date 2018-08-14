
## 有效三角形的个数
> 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。  

### 示例 1
> 输入: [2,2,3,4]     
> 输出: 3     
> 解释:   
>> 有效的组合是:   
>> 2,3,4 (使用第一个 2)   
>> 2,3,4 (使用第二个 2)   
>> 2,2,3 

### 思路
> 三角形两边之和用于大于第三边
> 满足最短的两条边之和大于第三条边，则可以组成三角形


### 解法
```javascript 1.8
let triangleNumber = function (nums) {
    let res = 0;
    nums.sort((a,b)=>a-b);
    for(let i = 0,len = nums.length;i<len - 2; i++){
        let a = nums[i];
        for(let j = i + 1; j<len - 1; j++){
            let b = nums[j];
            let k = j + 1;
            while (k < len && nums[k] < a + b){
                k++;
                res++;
            }
        }

    }
    return res;
};
```
