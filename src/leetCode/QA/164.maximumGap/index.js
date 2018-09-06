

var maximumGap = function(nums) {
    if(nums.length < 2){
        return 0;
    }
    let min = Math.min.apply(Math,nums);
    let max = Math.max.apply(Math,nums);
    let len = nums.length;
    let space = (max - min)/len;
    let minList = [];
    let maxList = [];
    for(let i = 0,len = nums.length;i<len; i++){
        let cur = nums[i];
        let index = Math.floor((cur-min)/space);
        minList[index] = Math.min(minList[index] || Infinity,cur);
        maxList[index] = Math.max(maxList[index] || -Infinity,cur);
    }
    let res = 0;
    let maxSum;
    for(let i = 0; i<=len; i++){
        if(minList[i] !== undefined && maxList[i] !== undefined){
            if(maxSum === undefined){
                maxSum = maxList[i];
            }else{
                res = Math.max(res,minList[i] - maxSum);
                maxSum = maxList[i];
            }
        }
    }
    return res;
};


console.log(maximumGap([1,10]));
