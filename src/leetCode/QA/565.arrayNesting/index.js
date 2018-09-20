


let arrayNesting = function(nums) {
    let set = new Set();
    let res = 0;
    for(let i = 0;i<nums.length; i++){
        let cur = nums[i];
        if(set.has(cur)){
            continue;
        }
        let r = 1;
        while (cur !== i){
            set.add(cur);
            r++;
            cur = nums[cur];
        }
        res = Math.max(res,r)
    }
    return res;
};