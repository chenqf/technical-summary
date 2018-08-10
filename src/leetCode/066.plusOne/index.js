

let plusOne = function (digits) {
    for(let len = digits.length,i = len -1; i>=0; i--){
        let val = digits[i];
        if(val !== 9){
            digits[i] = val + 1;
            break;
        }
        if(val === 9){
            digits[i] = 0;
            if(i === 0){
                digits.unshift(1);
                break;
            }
        }
    }
    return digits;
};