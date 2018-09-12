
let guessNumber = function (guess) {
    return function (n) {
        if(guess(n) === 0){
            return n;
        }
        let left = 1,right = n;
        while (left <= right){
            let mid = ~~((left + right)/2);
            let res = guess(mid);
            if(res === 0){
                return mid;
            }else if(res === 1){
                left = mid + 1;
            }else if(res === -1){
                right = mid - 1;
            }
        }
        return left;
    }
};
