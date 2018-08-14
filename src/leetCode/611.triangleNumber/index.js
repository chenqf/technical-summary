

// let helper = function (nums,index,cur,res) {
//     if(cur.length > 3){
//         return ;
//     }
//     if(cur.length === 3){
//         if(cur[0] + cur[1] > cur[2] && cur[0] + cur[2] > cur[1] && cur[2] + cur[1] > cur[0]){
//             res.push(cur);
//
//         }
//         return ;
//     }
//     for(let i = index,len = nums.length; i<len;i++){
//         helper(nums,i + 1,[...cur,nums[i]],res)
//     }
// };


// let triangleNumber = function(nums) {
//     let res = [];
//     helper(nums,0,[],res);
//     return res.length;
// };


let triangleNumber = function (nums) {
    let res = 0;
    nums.sort((a,b)=>a-b);
    for(let i = 0,len = nums.length;i<len - 2; i++){
        let a = nums[i];
        for(let j = i + 1; j<len - 1; j++){
            let b = nums[j];
            let k = j + 1;
            while (k < len && nums[k] < a + b){
                k++;
                res++;
            }
        }

    }
    return res;
};


console.log(triangleNumber([2,2,3,4]));