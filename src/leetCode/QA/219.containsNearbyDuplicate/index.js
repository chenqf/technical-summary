



let containsNearbyDuplicate = function(nums,k) {
    let map = new Map();
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = nums[i];
        if(map.has(cur)){
            let index = map.get(cur);
            if(Math.abs(index - i) <= k){
                return true;
            }
        }
        map.set(cur,i);
    }
    return false;
};