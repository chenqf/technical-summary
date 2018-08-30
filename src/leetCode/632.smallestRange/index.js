

var smallestRange = function (nums) {
    let list = [];
    let l = nums.length;
    let res_left,res_right = 0;
    for(let i = 0; i<l; i++){
        for(let j = 0,l = nums[i].length; j<l; j++){
            list.push({
                i,
                val:nums[i][j]
            })
        }
    }
    let len = list.length;
    list.sort((a,b)=>a.val - b.val);
    let map = new Map();
    let m = new Map();
    let left = 0,right = 0;
    while (map.size < l && right < len){
        let cur = list[right++];
        map.set(cur.i,(map.get(cur.i) || 0) + 1);
        m.set(cur.val,(map.get(cur.val) || 0) + 1);
        if(map.size === l){
            res_left = list[left].val;
            res_right = list[right - 1].val;
        }
    }
    while (left <len && right <= len){
        while (left < right && map.size === l && left < len){
            let cur = list[left++];
            let num = map.get(cur.i);
            let n = m.get(cur.val);

            if(n === 1){
                m.delete(cur.val)
            }else{
                m.set(cur.val,n - 1);
            }
            if(num === 1){
                map.delete(cur.i)
            }else{
                map.set(cur.i,num - 1);
                if(list[right-1].val - list[left].val < res_right - res_left || (list[right-1].val - list[left].val === res_right - res_left && list[left].val < res_left)){
                    res_left = list[left].val;
                    res_right = list[right-1].val;
                }
            }
        }
        if(right === len){
            right++
        }

        while (left < right && map.size !== l && right<len){
            let cur = list[right++];
            map.set(cur.i,(map.get(cur.i) || 0) + 1);
            m.set(cur.val,(map.get(cur.val) || 0) + 1);
            if(map.size === l){
                if(list[right-1].val - list[left].val < res_right - res_left || (list[right-1].val - list[left].val === res_right - res_left && list[left].val < res_left)){
                    res_left = list[left].val;
                    res_right = list[right-1].val;
                }
            }
        }
    }

    return [res_left,res_right];
};

var nums = [[1,4,7,10,13],[2,5,8,11,13],[3,6,9,12]]
console.log(smallestRange(nums));