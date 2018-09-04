
## 合并区间
> 给出一个区间的集合，请合并所有重叠的区间。

### 示例 1
> 输入: [[1,3],[2,6],[8,10],[15,18]]  
> 输出: [[1,6],[8,10],[15,18]]    
> 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].    

### 示例 2
> 输入: [[1,4],[4,5]]     
> 输出: [[1,5]]   
> 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。    


### 区间对象定义如下
```javascript 1.8
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
```


### 解法
```javascript 1.8
let merge = function (intervals) {
    if(!intervals.length){
        return [];
    }
    intervals.sort((a,b)=>a.start-b.start);
    let res = [intervals[0]];
    for(let i = 1; i<intervals.length; i++){
        let cur = intervals[i];
        let pre = res[res.length -1];
        if(cur.start >= pre.start && cur.start <= pre.end){
            pre.start = Math.min(cur.start,pre.start);
            pre.end = Math.max(cur.end,pre.end);
        }else{
            res.push(cur);
        }
    }
    return res;
};
```
