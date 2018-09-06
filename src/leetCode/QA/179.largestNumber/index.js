

let largestNumber = function(nums) {
    nums.sort((a,b)=>{
        a = String(a);
        b = String(b);
        return a + b - (b+a);
    });
    return nums.reduceRight((a,b)=>String(a)+String(b),'').replace(/^0+(\d+)/,'$1');
};