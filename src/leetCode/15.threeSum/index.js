

let threeSum = function(nums,n = 0) {
    let result = [];
    let len = nums.length;
    if(!len) return result;
    nums.sort((a,b)=>a-b);
    for(let k = 0; k<len; k++){
        if(k>0 && nums[k-1] === nums[k]){
            continue;
        }
        let target = n - nums[k];
        let i = k + 1;
        let j = len -1;
        while(i<j){
            if(nums[i] + nums[j] === target){
                result.push([nums[k],nums[i],nums[j]]);
                while (i<j && nums[i] === nums[i+1]) i++;
                while (i<j && nums[j] === nums[j-1]) j--;
                i++;
                j--;
            }else if(nums[i] + nums[j] > target){
                j--;
            }else{
                i++
            }
        }
    }
    return result;
};

console.log(threeSum([-4,-1,-1,0,1,2]));
