

let removeElement = function (nums,val) {
    let j = 0;
    for(let i = 0,len = nums.length; i<len; i++){
        if(nums[i] !== val){
            nums[j] = nums[i];
            j++
        }
    }
    return j;
};

console.log(removeElement([3,2,2,3],3));