




var findLengthOfLCIS = function(nums) {
    let i = 0,
        left = 0,
        right = 0,
        tempLeft = 0,
        tempRight = 0,
        len = nums.length;
    if(!len){
        return 0;
    }
    while (i < len - 1){
        let cur = nums[i],
            next = nums[i + 1];
        if(cur < next){
            tempLeft = i;
            tempRight = i + 1;
            let min = next - cur;
            i++;
            while (i<nums.length - 1 && nums[i] < nums[i+1]){
                tempRight = i + 1;
                i++
            }
            if(tempRight - tempLeft > right - left){
                left = tempLeft;
                right = tempRight;
            }
        }else{
            i++;
        }
    }
    return right - left + 1;
};