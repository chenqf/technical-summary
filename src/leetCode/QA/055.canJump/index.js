

let helper = function (nums,index,set) {
    if(index === 0){
        return true;
    }
    for (let i = index - 1; i >= 0; i--) {
        let num = nums[i];
        if(num >= index - i && !set.has(i)){
            set.add(i);
            if(helper(nums,i,set)){
                return true;
            }
        }
    }
    return false;
};

let canJump = function (nums) {
    return helper(nums,nums.length -1,new Set)
};

console.log(canJump([3,2,1,0,4]));