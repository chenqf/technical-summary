

let nums = [2, 7, 11, 15],
    target = 9;

let twoSum = function (nums, target) {
    for (let i = 0, len = nums.length; i < len; i++) {
        let item = nums[i];
        let index = nums.indexOf(target - item,i+1);
        if(~index){
            return [i,index]
        }
    }
};


console.log(twoSum(nums, target));