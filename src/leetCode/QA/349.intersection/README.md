
## 两个数组的交集
> 给定两个数组，编写一个函数来计算它们的交集。


### 示例 1
> 输入: nums1 = [1,2,2,1], nums2 = [2,2]      
> 输出: [2]   

### 示例 2
> 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]      
> 输出: [9,4]


### 说明
+ 输出结果中的每个元素一定是唯一的。
+ 我们可以不考虑输出结果的顺序。
   


### js内置语法实现
```javascript 1.8
let intersection = function(...args) {
    return [...new Set([].concat(...args))].filter((i)=>{
        return args.every((j)=>{
            return new Set(j).has(i);
        })
    });
};    
```

### 双指针法实现
```javascript 1.8
let intersection = function(nums1,nums2) {
    let set = new Set();
    let res = [];
    for(let i = 0,len = nums1.length; i<len; i++){
        set.add(nums1[i])
    }
    for(let i = 0,len = nums2.length; i<len; i++){
        if(set.has(nums2[i])){
            res.push(nums2[i]);
            set.delete(nums2[i]);
        }
    }
    return res;
};
```
