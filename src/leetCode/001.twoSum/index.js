

let nums = [2, 7, 11, 15],
    target = 9;

let twoSum1 = function (nums, target) {
    for (let i = 0, len = nums.length; i < len; i++) {
        let item = nums[i];
        let index = nums.indexOf(target - item,i+1);
        if(~index){
            return [i,index]
        }
    }
};

let twoSum2 = function (nums,target) {
    let map = new Map();
    for(let i = 0,len = nums.length; i<len;i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]),i]
        }
        map.set(nums[i],i);
    }
};


console.log(twoSum2(nums, target));