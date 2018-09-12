let hIndex = function(citations) {
    let len = citations.length,
        left = 0,
        right = len - 1;
    while (left <= right){
        let mid = ~~((left + right)/2),
            midVal = citations[mid],
            num = len - mid;
        if(midVal >= num){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return len - left;
};



















