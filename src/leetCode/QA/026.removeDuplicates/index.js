
let removeDuplicates = function(nums) {
    let len = nums.length;
    if(!len) return 0;
    let i = 0;
    for(let j = 0;j<len; j++){
        if(nums[i] !== nums[j]){
            i = i + 1;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};