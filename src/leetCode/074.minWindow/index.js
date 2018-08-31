

let minWindow = function (s,t) {
    let res_left,res_right;
    let left = 0,right = -1;
    let count = 0;
    let map = new Map();
    let len = s.length;
    for(let i = 0 ; i<t.length; i++){
        let cur = t[i];
        if(map.has(cur)){
            map.set(cur,map.get(cur) + 1)
        }else{
            count++;
            map.set(cur,1)
        }
    }
    while (right < len){
        if(count){
            right++;
            let cur = s[right];
            let n = map.get(cur);
            if(n !== undefined){
                let r = n - 1;
                if(r === 0){
                    count--;
                }
                map.set(cur,r);
            }
        }else{
            if((!res_left && !res_right) || right - left <  res_right - res_left){
                res_left = left;
                res_right = right;
            }
            let cur = s[left++];
            let n = map.get(cur);
            if(n !== undefined){
                map.set(cur,n+1);
                if(n >= 0){
                    count++;
                }
            }
        }
    }
    return s.slice(res_left,res_right + 1)
};


var s = "ADOBECODEBANC";
var t = "ABC"

console.log(minWindow(s,t));