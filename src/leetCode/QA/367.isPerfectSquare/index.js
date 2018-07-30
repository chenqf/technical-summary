



let isPerfectSquare = function(num) {
    if(num === 1){
        return true;
    }
    let left = 1,right = num;
    while (left < right - 1){
        let mid = ~~((left + right)/2);
        let cur = Math.pow(mid ,2);
        if(cur === num){
            return true;
        }else if(cur > num){
            right = mid;
        }else if(cur < num){
            left = mid;
        }
    }
    if(Math.pow(left,2) === num || Math.pow(right,2) === num){
        return true;
    }else{
        return false;
    }
};
