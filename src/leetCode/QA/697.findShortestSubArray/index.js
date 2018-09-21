




let findShortestSubArray = function(nums) {
    let map = new Map();
    let maxSum = 0;
    let res = Infinity;
    for(let i = 0,len = nums.length; i<len; i++){
        let cur = nums[i];
        let obj;
        if(map.has(cur)){
            obj = map.get(cur);
            obj.right = i;
            obj.num = obj.num + 1;
        }else{
            obj = {left:i,right:i,num:1};
            map.set(cur,obj);
        }
        maxSum = Math.max(maxSum,obj.num);
    }
    for([key,value] of map){
        if(value.num === maxSum){
            res = Math.min(res,value.right - value.left + 1)
        }
    }
    return res;
};

console.log(findShortestSubArray([1,2,2,3,1]));