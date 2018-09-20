

let subarraySum = function(nums, k) {
    let sum = 0;
    let res = 0;
    let map = new Map();
    map.set(0,1);
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = nums[i];
        sum = sum + cur;
        if(map.has(sum - k)){
            res = res + map.get(sum - k);
        }
        map.set(sum,(map.get(sum) || 0) + 1)
    }
    return res;
};