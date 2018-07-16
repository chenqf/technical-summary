/**
 * 二分查找（递归）
 */
function binarySearch(list = [],value,start = 0,end = list.length - 1) {
    if(start > end){
        return -1;
    }
    let midIndex = parseInt((start + end)/2);
    let midValue = list[midIndex];
    if(midValue === value){
        return midIndex
    }else if(midValue > value){
        return binarySearch(list,value,start,midIndex - 1)
    }else if(midValue < value){
        return binarySearch(list,value,start + 1,end)
    }
}

/**
 * 二分查找（非递归）
 */
function binarySearch(list = [],value,start = 0,end = list.length - 1) {
    while (start <= end){
        let midIndex = parseInt((start + end)/2);
        let midValue = list[midIndex];
        if(midValue === value){
            return midIndex;
        }else if(midValue > value){
            end = midIndex - 1;
        }else if(midValue < value){
            start = midIndex + 1;
        }
    }
    return -1;
}