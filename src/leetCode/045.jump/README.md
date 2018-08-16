
## 跳跃游戏 II
> 给定一个非负整数数组，你最初位于数组的第一个位置。     
> 数组中的每个元素代表你在该位置可以跳跃的最大长度。
> 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

### 示例 1
> 输入: [2,3,1,1,4]   
> 输出: 2     
> 解释: 跳到最后一个位置的最小跳跃数是 2。    
>> 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

### 思路1
> 先找到距离终点最远且能够到达终点的点    
> 再将找到的点作为终点，再次寻找距离最远且可达的点

### 解法1
```javascript 1.8
function helper(nums,index,res) {
    for(let i = 0; i<index; i++){
        if(nums[i] + i >= index){
            res.num ++ ;
            helper(nums,i,res);
            break;
        }
    }
}

function jump1(nums) {
    let len = nums.length;
    if(len<=1){
        return 0;
    }
    let res = {num:0};
    helper(nums,len - 1,res);
    return res.num;
}
```
### 思路2
> 贪心算法
> 从起点开始，找到最大可到达的位置     
> 再从可到达的位置寻找最大可到达的位置
> 寻找几次，即为最少次数

### 解法2
```javascript 1.8
let jump2 = function(nums) {
    let len = nums.length;
    let res = 0;
    let cur = 0;
    let i = 0;
    while (cur < len - 1){
        res++;
        let pre = cur;
        for(; i<=pre;i++){
            cur = Math.max(cur,i+nums[i]);
        }
        if(pre === cur){
            return -1;
        }
    }
    return res;
};
```