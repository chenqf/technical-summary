

let partitionLabels = function(S) {
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