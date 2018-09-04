
## 两个数组的交集 II
> 给定两个数组，编写一个函数来计算它们的交集。


### 示例 1
> 输入: nums1 = [1,2,2,1], nums2 = [2,2]      
> 输出: [2,2]     

### 示例 2
> 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]      
> 输出: [9,4]


### 说明
+ 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
+ 我们可以不考虑输出结果的顺序。
   


### 双指针法实现
```javascript 1.8
let intersect = function(nums1,nums2) {
    let map = new Map();
    let res = [];
    for(let i = 0,len = nums1.length; i<len; i++){
        let cur = nums1[i];
        let curNum = map.get(cur) || 0;
        map.set(cur,curNum + 1);
    }
    for(let i = 0,len = nums2.length; i<len; i++){
        let cur = nums2[i];
        let curNum = map.get(cur) || 0;
        if(curNum){
            res.push(cur);
            map.set(cur,curNum - 1)
        }
    }
    return res;
};
```
