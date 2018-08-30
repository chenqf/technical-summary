

let moveZeroes = function (nums) {
    let len = nums.length;
    let j = 0;
    for(let i = 0;i<len; i++){
        let cur = nums[i];
        if(cur){
            nums[j++] = cur;
        }
    }
    while (j<len){
        nums[j++] = 0;
    }
};