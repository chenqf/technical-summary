

let arrayPairSum = function(nums) {
    let res = 0;
    nums.sort((a,b)=>a-b);
    for(let i = 0,len = nums.length; i<len; i=i+2){
        res += nums[i];
    }
    return res;
};