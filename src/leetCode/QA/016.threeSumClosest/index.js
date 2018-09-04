

let threeSumClosest = function(nums,target) {
    let result = Infinity;
    let len = nums.length;
    if(len <= 3){
        return nums.reduce((a,b)=>a+b,0);
    }
    nums.sort((a,b)=>a-b);
    for(let k = 0; k<len-2; k++){
        if(k>0 && nums[k-1] === nums[k]){
            continue;
        }
        let i = k + 1;
        let j = len -1;
        while(i<j){
            let count = nums[k] + nums[i] + nums[j];
            if(count === target){
                return target;
            }
            if(Math.abs(result - target) > Math.abs(count - target)){
                result = count;
            }
            if(count > target){
                j--
            }else{
                i ++
            }
        }
    }
    return result;
};

console.log(threeSumClosest( [-1,2,1,-4],1));
