

function helper(nums,index,res) {
    for(let i = 0; i<index; i++){
        if(nums[i] + i >= index){
            res.num ++ ;
            helper(nums,i,res);
            break;
        }
    }
}


function jump1(nums) {
    let len = nums.length;
    if(len<=1){
        return 0;
    }
    let res = {num:0};
    helper(nums,len - 1,res);
    return res.num;
}


let jump2 = function(nums) {
    let len = nums.length;
    let res = 0;
    let cur = 0;
    let i = 0;
    while (cur < len - 1){
        res++;
        let pre = cur;
        for(; i<=pre;i++){
            cur = Math.max(cur,i+nums[i]);
        }
        if(pre === cur){
            return -1;
        }
    }
    return res;
};