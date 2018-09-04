

let minWindow = function (s,t) {
    let res = '';
    let len = Infinity;
    let length = s.length;

    for(let i = 0;i<length; i++){
        let map = new Map();
        for(let k = 0; k < t.length; k++){
            if(map.has(t[k])){
                map.set(t[k],map.get(t[k]) + 1);
            }else{
                map.set(t[k],1);
            }
        }
        for(let j = i; j<length; j++){
            if(j === i && !map.get(s[j])){
                break;
            }
            let l = j - i + 1;
            if(l >= len){
                break;
            }
            if(map.has(s[j])){
                if(map.get(s[j]) === 1){
                    map.delete(s[j]);
                }else{
                    map.set(s[j],map.get(s[j]) - 1)
                }
            }
            if(!map.size){
                res = s.slice(i,j+1);
                len = l;
            }
        }
    }
    return res;
};

console.log(minWindow('ADOBECODEBANC','ABC'));