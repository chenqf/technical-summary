
let searchMatrix = function(matrix, target) {
    let len = matrix.length,
        left = 0,
        right = len - 1,
        array = [];

    while (left <= right){
        let mid = ~~((left + right)/2),
            start = matrix[mid][0],
            end = matrix[mid][ matrix[mid].length - 1];
        if(start <= target && end >= target){
            array = matrix[mid];
            break;
        }else if(target < start){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    if(!array.length){
        return false;
    }
    return array.indexOf(target) >= 0;
};