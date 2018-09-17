


let thirdMax = function(nums) {
    let first = -Infinity,
        two = -Infinity,
        three = -Infinity;
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = nums[i];
        if(cur === first || cur === two || cur === three){
            continue;
        }
        if(cur > first){
            three = two;
            two = first;
            first = cur;
        }else if(cur > two){
            three = two;
            two = cur;
        }else if(cur > three){
            three = cur;
        }
    }
    if(three !== -Infinity){
        return three;
    }else{
        return first;
    }
};