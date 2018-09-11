


let rotate = function(nums, k) {
    while (k){
        nums.unshift(nums.pop())
        k--;
    }
};
