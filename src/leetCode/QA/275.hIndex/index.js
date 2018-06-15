

let hIndex = function(citations) {
    let len = citations.length,
        left = 0,
        right = len - 1;
    while(left < right - 1){
        let mid = ~~((left + right)/2),
            midValue = citations[mid];
        if(midValue >= len - mid){
            right = mid;
        }else{
            left = mid;
        }
    }
    if(citations[left] >= len - left){
        return len - left
    }else if(citations[right] >= len - right){
        return len - right;
    }else{
        return 0;
    }
};