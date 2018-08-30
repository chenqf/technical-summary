
## 最小区间
> 你有 k 个升序排列的整数数组。找到一个最小区间，使得 k 个列表中的每个列表至少有一个数包含在其中。       
> 我们定义如果 b-a < d-c 或者在 b-a == d-c 时 a < c，则区间 [a,b] 比 [c,d] 小。

### 示例 1
> 输入:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]           
> 输出: [20,24]       
> 解释: 
>> 列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。       
>> 列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。        
>> 列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。   

### 注意
+ 给定的列表可能包含重复元素，所以在这里升序表示 >= 。
+ 1 <= k <= 3500
+ -10 ** 5 <= 元素的值 <= 10 ** 5

### 解法
```javascript 1.8
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
```