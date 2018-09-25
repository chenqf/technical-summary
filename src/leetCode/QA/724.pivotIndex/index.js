

let pivotIndex = function(nums) {
    let sum = nums.reduce((init,cur)=>init + cur,0);
    let len = nums.length;
    let init = 0;
    let res = -1;
    for(let i = len - 1; i>=0; i--){
        let cur = nums[i];
        sum = sum - cur;
        if(sum === init){
            res = i;
        }
        init = init + cur;
    }
    return res;
};


console.log(pivotIndex([-1,-1,-1,0,1,1]));