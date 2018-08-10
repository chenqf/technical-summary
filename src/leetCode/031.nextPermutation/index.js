

let nextPermutation = function (nums) {
    let len = nums.length;
    let sortIndex = 0;
    for(let i = len - 1; i>0; i--){
        let j = i - 1;
        let temp = nums[i];
        while (j >= 0 && nums[j] >= temp){
            j -- ;
        }
        if(j>=0){
            nums[i] = nums[j];
            nums[j] = temp;
            sortIndex = j + 1;
            break;
        }
    }
    nums.sort((cur,next)=>{
        if(sortIndex){
            sortIndex--;
            return -1;
        }
        return cur - next;
    });
    console.log(sortIndex,nums);
    // return nums;
};

console.log(nextPermutation([2,2,7,5,4,3,2,2,1]));
// console.log(nextPermutation([1,3,4]));