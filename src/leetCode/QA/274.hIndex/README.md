
## H指数
> 给定一位研究者论文被引用次数的数组（被引用次数是非负整数）。编写一个方法，计算出研究者的 h 指数。

### h 指数的定义
> 一位有 h 指数的学者，代表他（她）的 N 篇论文中至多有 h 篇论文，分别被引用了至少 h 次，其余的 N - h 篇论文每篇被引用次数不多于 h 次。

### 示例 1
> 输入: citations = [3,0,6,1,5]               
> 输出: 3         
> 解释: 给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。由于研究者有 3 篇论文每篇至少被引用了 3 次，其余两篇论文每篇被引用不多于 3 次，所以她的 h 指数是 3。        

### 解法
```javascript 1.8
let hIndex = function(citations) {
    citations.sort((a,b)=>a-b);
    let len = citations.length;
    let i = 0;
    while (i<len){
        let num = len - i;
        if(citations[i] >= num){
            return num;
        }
        i++;
    }
    return 0;
};
```