
let firstMissingPositive = function (nums) {
    let len = nums.length;
    if(!len){
        return 1;
    }
    let list = [];
    for(let i = 0; i<len; i++){
        let val = nums[i];
        if(val >= 0){
            list[val] = 1;
        }
    }
    let length = list.length;
    for(let i = 0; i < length; i++){
        if(i>0 && !list[i]){
            return i;
        }
    }
    return list.length;
};

