

let partitionLabels1 = function(S) {
    let len = S.length;
    let map = new Map();
    let res = [];
    for(let i = 0;i<len; i++){
        map.set(S[i],(map.get(S[i]) || 0) + 1)
    }

    let i = 0;
    while (i < len){
        let m = new Map();
        let j = i;
        while (j < len){
            let cur = S[j];
            let num = map.get(cur);
            let count = m.get(cur);
            if(num > 1 && !count){
                m.set(cur,num - 1);
            }else if(num > 1 && count){
                count--;
                if(!count){
                    m.delete(cur)
                }else{
                    m.set(cur,count);
                }
            }
            if(!m.size){
                res.push(j - i + 1);
                i = j + 1;
                break;
            }else{
                j++;
            }
        }
    }
    return res;
};



let partitionLabels2 = function(S) {
    let len = S.length;
    let map = new Map();
    let res = [];
    for(let i = 0;i<len; i++){
        map.set(S[i],i);
    }
    let start = 0,last = 0;
    for(let i = 0;i<len; i++){
        last = Math.max(last,map.get(S[i]));
        if(i === last){
            res.push(last - start + 1);
            start = last + 1;
        }
    }
    return res;
};