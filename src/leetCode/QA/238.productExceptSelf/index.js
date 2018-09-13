

let productExceptSelf = function(nums) {
    let len = nums.length;
    let preList = [1];
    let nextList = [];
    nextList[len - 1] = 1;
    for(let i = 1; i<len; i++){
        preList[i] = preList[i - 1] * nums[i - 1];
    }
    for(let i = len - 2; i>= 0; i--){
        nextList[i] = nextList[i + 1] * nums[i + 1];
    }
    return nums.map((item,index)=>preList[index] * nextList[index]);
};