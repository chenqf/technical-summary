



let fourSum = function(nums,target) {
    let res = [];
    nums.sort((a,b)=>a-b);
    for(let i = 0,len = nums.length; i<len - 3; i++){
        if(i > 0 && nums[i - 1] === nums[i]){
            continue;
        }
        let first = nums[i];
        for(let j = i + 1; j<len - 2; j++){
            if(j > i + 1 && nums[j - 1] === nums[j]){
                continue;
            }
            let two = nums[j];
            let left = j + 1;
            let right = len - 1;
            while(left < right){
                let sum = nums[left] + nums[right] + first + two;
                if(sum === target){
                    res.push([first,two,nums[left],nums[right]]);
                    while (left < right && nums[left + 1] === nums[left]){
                        left++;
                    }
                    while (left < right && nums[right - 1] === nums[right]){
                        right--;
                    }
                    left ++;
                    right --;
                }else if(sum > target){
                    right--
                }else{
                    left++
                }
            }
        }
    }
    return res;
};

console.log(fourSum([-1,-5,-5,-3,2,5,0,4],-7));

