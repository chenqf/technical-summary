

let sortColors = function (nums) {
    for(let i = 1,len = nums.length; i<len; i++){
        let j = i -1;
        let temp = nums[i];
        while (j >= 0 && nums[j] > temp){
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = temp;
    }
};