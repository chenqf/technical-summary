

let matrixReshape = function(nums, r, c) {
    let size = nums.length && nums.length * nums[0].length;
    if(r * c !== size) return nums;
    let res = [];
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j<nums[0].length; j++){
            let cur = nums[i][j];
            let n = i * nums[0].length + j;
            let row = res[~~(n/c)] || ( res[~~(n/c)] = []);
            row[n%c] = cur
        }
    }
    return res;
};

console.log(matrixReshape([[1,2],[3,4]],4,1));