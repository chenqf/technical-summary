function Interval(start, end) {
    this.start = start;
    this.end = end;
}

let intervals = [new Interval(1,3),new Interval(2,6),new Interval(8,10),new Interval(15,18)];

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

console.log(merge(intervals));