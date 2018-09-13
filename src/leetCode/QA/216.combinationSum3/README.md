
## 组合总和 III
> 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

### 说明
+ 所有数字都是正整数。
+ 解集不能包含重复的组合。 

### 示例 1
> 输入: k = 3, n = 7      
> 输出: [[1,2,4]]

### 示例 2
> 输入: k = 3, n = 9          
> 输出: [[1,2,6], [1,3,5], [2,3,4]]       


### 解法
```javascript 1.8
let helper = function (k,n,cur,sum,preList,res) {
    if(sum === n && preList.length === k){
        res.push(preList);
        return;
    }
    for(let i = cur;i<= 9;i++){
        helper(k,n,i+1,sum + i,[...preList,i],res)
    }
};


let combinationSum3 = function(k, n) {
    let res = [];
    helper(k,n,1,0,[],res);
    return res;
};
```