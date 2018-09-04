

let findPairs = function(nums,k) {
    if(k < 0){
        return 0;
    }
    let res = 0;
    let map = new Map();
    for(let i = 0,len = nums.length; i < len ;i++){
        map.set(nums[i],(map.get(nums[i]) || 0) + 1)
    }
    for(let [key,value] of map){
        if(!k){
            if(value > 1)
                res++
        }else if(map.has(key + k)){
            res++;
        }
    }
    return res;
};

console.log(findPairs([1,3,1,5,4],0));