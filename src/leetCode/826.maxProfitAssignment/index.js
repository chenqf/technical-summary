

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