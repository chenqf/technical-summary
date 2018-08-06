


let findRadius = function(houses, heaters) {
    houses.sort((a,b)=>a-b);
    heaters.sort((a,b)=>b-a);
    let l = heaters.length;
    let res = 0;
    for(let i = 0;i<houses.length; i++){
        let h = houses[i];
        let left = 0,right = l - 1;
        while (left < right - 1){
            let mid = ~~((left + right)/2),
                midVal = heaters[mid];
            if(midVal === h){
                left = right = mid;
            }else if(midVal > h){
                right = mid;
            }else{
                left = mid;
            }
        }
        res = Math.max(res,Math.min(Math.abs(h - heaters[left]),Math.abs(h - heaters[right])))
    }
    return res;
};