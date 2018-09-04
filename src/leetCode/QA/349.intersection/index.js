



let intersection = function(...args) {
    return [...new Set([].concat(...args))].filter((i)=>{
        return args.every((j)=>{
            return new Set(j).has(i);
        })
    });
};

let intersection1 = function(nums1,nums2) {
    let set = new Set();
    let res = [];
    for(let i = 0,len = nums1.length; i<len; i++){
        set.add(nums1[i])
    }
    for(let i = 0,len = nums2.length; i<len; i++){
        if(set.has(nums2[i])){
            res.push(nums2[i]);
            set.delete(nums2[i]);
        }
    }
    return res;
};
