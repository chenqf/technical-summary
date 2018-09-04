

let findDuplicate = function(nums) {
    let set = new Set();
    for(let i = 0,len = nums.length;i<len; i++){
        let cur = nums[i];
        if(set.has(cur)){
            return cur;
        }else{
            set.add(cur);
        }
    }
};