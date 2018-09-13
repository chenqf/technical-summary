



let summaryRanges = function(nums) {
    let res = [];
    let len = nums.length;
    let i = 0,j = 0;
    while (i<len){
        while(j + 1 < len && nums[j] + 1 === nums[j + 1]){
            j++;
        }
        if(i === j){
            res.push(`${nums[i]}`)
        }else{
            res.push(`${nums[i]}->${nums[j]}`)
            i = j;
        }
        i++;
        j++;
    }
    return res;
};