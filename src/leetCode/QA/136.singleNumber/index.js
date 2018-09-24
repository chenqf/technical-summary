

let singleNumber = function(nums) {
    let map = new Map();
    for(let i = 0 ,len= nums.length; i<len; i++){
        let cur = nums[i];
        if(map.has(cur)){
            map.delete(cur);
        }else{
            map.set(cur,1);
        }
    }
    for(let [key] of map){
        return key;
    }
};
