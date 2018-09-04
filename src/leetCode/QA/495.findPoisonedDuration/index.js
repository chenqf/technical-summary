

let findPoisonedDuration = function(timeSeries, duration) {
    let res = 0;
    for(let i = 0,len = timeSeries.length; i<len; i++){
        let j = i -1;
        if(j>=0 && timeSeries[i] - timeSeries[j] < duration){
            res = res - (duration - (timeSeries[i] - timeSeries[j]))
        }
        res = res + duration;
    }
    return res;
};

console.log(findPoisonedDuration([1,4],2));