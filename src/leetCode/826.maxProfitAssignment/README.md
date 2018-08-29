
## 安排工作以达到最大收益
> 有一些工作：difficulty[i] 表示第i个工作的难度，profit[i]表示第i个工作的收益。           
> 现在我们有一些工人。worker[i]是第i个工人的能力，即该工人只能完成难度小于等于worker[i]的工作。      
> 每一个工人都最多只能安排一个工作，但是一个工作可以完成多次。        
> 举个例子，如果3个工人都尝试完成一份报酬为1的同样工作，那么总收益为 $3。如果一个工人不能完成任何工作，他的收益为 $0 。       
> 我们能得到的最大收益是多少？
  
  
### 示例 1
> 输入: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]      
> 输出: 100             
> 解释: 工人被分配的工作难度是 [4,4,6,6] ，分别获得 [20,20,30,30] 的收益。        


### 提示
+ 1 <= difficulty.length = profit.length <= 10000
+ 1 <= worker.length <= 10000
+ difficulty[i], profit[i], worker[i]  的范围是 [1, 10^5]




### 解法
```javascript 1.8
let maxProfitAssignment = function(difficulty, profit, worker) {
    let list = [];
    for(let i = 0,len = difficulty.length; i<len; i++){
        list.push({
            d:difficulty[i],
            p:profit[i]
        })
    }
    list.sort((a,b)=>a.p - b.p);
    let res = 0;
    for(let i = 0,len = worker.length; i<len ; i++){
        let cur = worker[i];
        for(let l = list.length,j = l - 1; j>=0 ;j--){
            if(cur >= list[j].d){
                res = res + list[j].p;
                break;
            }
        }
    }
    return res;
};
```
