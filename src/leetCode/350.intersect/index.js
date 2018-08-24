



let intersect = function(nums1,nums2) {
    let map = new Map();
    let res = [];
    for(let i = 0,len = nums1.length; i<len; i++){
        let cur = nums1[i];
        let curNum = map.get(cur) || 0;
        map.set(cur,curNum + 1);
    }
    for(let i = 0,len = nums2.length; i<len; i++){
        let cur = nums2[i];
        let curNum = map.get(cur) || 0;
        if(curNum){
            res.push(cur);
            map.set(cur,curNum - 1)
        }
    }
    return res;
};
