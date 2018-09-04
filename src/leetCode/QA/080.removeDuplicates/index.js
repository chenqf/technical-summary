



let removeDuplicates = function(nums) {
    let j = 0;
    let map = new Map();
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = nums[i];
        if(map.has(cur)){
            map.set(cur,map.get(cur) + 1)
        }else{
            map.set(cur,1)
        }
        if(map.get(cur) <= 2){
            nums[j] = nums[i];
            j++
        }
    }
    return j;
};
