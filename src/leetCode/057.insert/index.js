function Interval(start, end) {
    this.start = start;
    this.end = end;
}

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

console.log(merge(intervals));