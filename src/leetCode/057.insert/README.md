
## 插入区间
> 给出一个无重叠的 ，按照区间起始端点排序的区间列表。    
> 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

### 示例 1
> 输入: intervals = [[1,3],[6,9]], newInterval = [2,5]        
> 输出: [[1,5],[6,9]]         

### 示例 2
> 输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]       
> 输出: [[1,2],[3,10],[12,16]]        
> 解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。       


### 区间对象定义如下
```javascript 1.8
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
```


### 解法
```javascript 1.8
let insert = function(intervals, newInterval) {
    let res = [];
    let hasInsert = false;
    for(let i = 0,len = intervals.length; i<len; i++){
        let cur = intervals[i];
        if(cur.start <= newInterval.end && cur.end >= newInterval.start){
            newInterval.start = Math.min(cur.start,newInterval.start);
            newInterval.end = Math.max(cur.end,newInterval.end);
        }else if(newInterval.end < cur.start && !hasInsert){
            res.push(newInterval,cur);
            hasInsert = true;
        }else{
            res.push(cur)
        }
    }
    if(!hasInsert){
        res.push(newInterval)
    }
    return res;
};
```
