
## 猜数字大小
> 我们正在玩一个猜数字游戏。 游戏规则如下：     
> 我从 1 到 n 选择一个数字。 你需要猜我选择了哪个数字。        
> 每次你猜错了，我会告诉你这个数字是大了还是小了。      
> 你调用一个预先定义好的接口 guess(int num)，它会返回 3 个可能的结果（-1，1 或 0）：
>> -1 : 我的数字比较小
>>  1 : 我的数字比较大     
>> 0 : 恭喜！你猜对了！


### 示例 
> 输入: n = 10, pick = 6      
> 输出: 6     

### 解法
```javascript 1.8
let guessNumber = function (guess) {
    return function (n) {
        if(guess(n) === 0){
            return n;
        }
        let left = 1,right = n;
        while (left <= right){
            let mid = ~~((left + right)/2);
            let res = guess(mid);
            if(res === 0){
                return mid;
            }else if(res === 1){
                left = mid + 1;
            }else if(res === -1){
                right = mid - 1;
            }
        }
        return left;
    }
};
```
