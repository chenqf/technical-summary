

```javascript 1.8
/**
 * 通过两层循环，依次比较子数组中的最大值
 * 性能较差
 */
function findMaxSubArray1(list) {
    let start,end,sum = 0;
    for(let i = 0,len = list.length; i<len; i++){
        let tempSum = 0;
        for(let j = i;j<len; j++){
            tempSum = tempSum + list[j];
            if(tempSum > sum){
                start = i;
                end = j;
                sum = tempSum;
            }
        }
    }
    return list.slice(start,end +1);
}
```
```javascript 1.8
/**
 * 通过递归分解子问题
 * 分为，左侧，右侧，中间三部分
 */
function findMaxSubArray2(list) {
    let len = list.length;
    if(len <= 1){
        return list;
    }
    let mid = ~~(len/2);
    let left = list.slice(0,mid);
    let right = list.slice(mid);

    let sum = list[mid];
    let midSum = list[mid];
    let leftIndex = mid,rightIndex = mid;
    for(let i = mid -1; i>=0;i--){
        sum = sum + list[i];
        if(sum > midSum){
            midSum = sum;
            leftIndex = i;
        }
    }
    for(let i = mid +1;i<len; i++){
        sum = sum + list[i];
        if(sum > midSum){
            midSum = sum;
            rightIndex = i;
        }
    }
    let midList = list.slice(leftIndex,rightIndex +1);
    let leftList = findMaxSubArray2(left);
    let rightList = findMaxSubArray2(right);
    let leftSum = leftList.reduce((a,b)=>a+b,0);
    let rightSum = rightList.reduce((a,b)=>a+b,0);
    if(midSum >= leftSum && midSum >= rightSum){
        return midList;
    }
    if(leftSum >= midSum && leftSum >= rightSum){
        return leftList;
    }
    if(rightSum >= midSum && rightSum >= leftSum){
        return rightList;
    }
}
```

```javascript 1.8
console.log(findMaxSubArray1([1,2,-10,23,-1,-2,10,12,-1,-14,29])); // [23, -1, -2, 10, 12, -1, -14, 29]
console.log(findMaxSubArray2([1,2,-10,23,-1,-2,10,12,-1,-14,29])); // [23, -1, -2, 10, 12, -1, -14, 29]
```