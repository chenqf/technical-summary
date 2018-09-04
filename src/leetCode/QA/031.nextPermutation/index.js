

let nextPermutation = function (nums) {
    let list = [];
    for(let len = nums.length,i = len -1; i>0; i--){
        let temp = nums[i];
        let j = i - 1;
        while (j>=0 && nums[j]>=temp){
            j --;
        }
        if(j >= 0){
            list.push({
                i,j
            })
        }
    }
    list.sort((a,b)=>{
        let r = b.j - a.j;
        if(!r){
            return nums[a.i] - nums[b.i];
        }else{
            return r;
        }
    });
    if(list.length){
        let item = list[0];
        let i = item.i;
        let j = item.j;
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        let sortList = nums.splice(j + 1).sort((a,b)=>a-b);
        Array.prototype.push.apply(nums,sortList)
    }else{
        nums.reverse();
    }
    console.log(nums);
};

console.log(nextPermutation([4,2,0,2,3,2,0]));
// console.log(nextPermutation([1,3,4]));