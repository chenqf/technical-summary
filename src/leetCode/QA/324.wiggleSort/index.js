let wiggleSort = function(nums) {
    nums.sort((a,b)=>a-b);
    let len = nums.length;
    if(len<2){
        return ;
    }
    let i = Math.ceil(len/2 - 1),
        j = len - 1,
        list = [];
    while (i>=0){
        list.push(nums[i]);
        if(list.length<len){
            list.push(nums[j])
        }
        i--;
        j--;
    }
    for(let i = 0; i<list.length; i++){
        nums[i] = list[i]
    }
};