

let searchArray = function (matrix,target,start = 0,end = matrix.length - 1) {
    if(start < 0 || start > end || end >= matrix.length){
        return false;
    }
    let mid = ~~(((start + end))/2),
        midList = matrix[mid];
    if(midList[0] <= target && midList[midList.length - 1] >= target){
        return midList;
    }else if(target < midList[0]){
        return searchArray(matrix,target,start,mid - 1);
    }else if(target > midList[midList.length - 1]){
        return searchArray(matrix,target,mid + 1,end);
    }
};


let searchMatrix = function(matrix, target) {
    let array = searchArray(matrix,target);
    if(!array){
        return false;
    }
    return array.indexOf(target) >= 0;
};