



let checkPossibility = function(nums) {
    let cur = 1;
    for(let i = 1,len = nums.length; i<len ; i++){
        if(nums[i] < nums[i - 1]){
            if(!cur) return false;
            if(i === 1 || nums[i] >= nums[i - 2]){
                nums[i - 1] = nums[i];
            }else{
                nums[i] = nums[i - 1]
            }
            cur--;
        }
    }
    return true;
};