


let findClosestElements1 = function(arr, k, x) {
    let len = arr.length;
    let left = 0,
        right = len - 1;
    while (right - left + 1 > k){
        let l = Math.abs(arr[left] - x),
            r = Math.abs(arr[right] - x);
        if(r >= l){
            right--;
        }else{
            left ++;
        }
    }
    return arr.slice(left,right + 1);
};


let findClosestElements = function(arr, k, x) {
    let len = arr.length;
    let left = 0,
        right = len - k;
    while (left <= right){
        let mid = ~~((left + right)/2);
        if(x - arr[mid] > arr[mid + k] - x){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return arr.slice(left,left + k);
};