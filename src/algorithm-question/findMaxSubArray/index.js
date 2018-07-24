
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

    let midLeftSum = list[mid],
        tempLeftSum = midLeftSum,
        midLeftIndex = mid;

    //先计算左侧
    for(let i = mid -1; i>=0;i--){
        tempLeftSum = tempLeftSum + list[i];
        if(tempLeftSum > midLeftSum){
            midLeftSum = tempLeftSum;
            midLeftIndex = i;
        }
    }
    let midSum = midLeftSum,
        midRightIndex = mid,
        tempRightSum = midSum;
    for(let i = mid +1;i<len; i++){
        tempRightSum = tempRightSum + list[i];
        if(tempRightSum > midSum){
            midSum = tempRightSum;
            midRightIndex = i;
        }
    }
    let midSub = list.slice(midLeftIndex,midRightIndex + 1);
    let leftSub = findMaxSubArray2(list.slice(0,mid));
    let rightSub = findMaxSubArray2(list.slice(mid));

    let leftSum = leftSub.reduce((a,b)=>a+b,0);
    let rightSum = rightSub.reduce((a,b)=>a+b,0);
    if(midSum >= leftSum && midSum >= rightSum){
        return midSub;
    }
    if(leftSum >= midSum && leftSum >= rightSum){
        return leftSub;
    }
    if(rightSum >= midSum && rightSum >= leftSum){
        return rightSub;
    }
}


console.log(findMaxSubArray1([1,2,-10,23,-1,-2,10,12,-1,-14,29,-10,1,2,3])); // [23, -1, -2, 10, 12, -1, -14, 29]
console.log(findMaxSubArray2([1,2,-10,23,-1,-2,10,12,-1,-14,29,-10,1,2,3])); // [23, -1, -2, 10, 12, -1, -14, 29]