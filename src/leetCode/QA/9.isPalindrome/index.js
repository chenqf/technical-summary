

let isPalindrome = function (num) {
    let str = String(num);
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
};

