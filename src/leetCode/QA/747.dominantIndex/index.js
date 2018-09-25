






let dominantIndex = function(nums) {
    let firstMax = -Infinity,
        secondMax = -Infinity,
        index = -1;
    //找到最大值，以及次最大值
    for(let i = 0; i<nums.length; i++){
        let cur = nums[i];
        if(i === 0){
            firstMax = cur;
            index = i;
        }else{
            if(cur > firstMax){
                secondMax = firstMax;
                firstMax = cur;
                index = i;
            }else if(cur > secondMax){
                secondMax = cur;
            }
        }
    }
    if(firstMax >= 2 * secondMax){
        return index;
    }else{
        return -1;
    }
};