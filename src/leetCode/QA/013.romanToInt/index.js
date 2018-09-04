
let getMap = function () {
    return {
        1:'I',
        4:'IV',
        5:'V',
        9:'IX',
        10:'X',
        40:'XL',
        50:'L',
        90:'XC',
        100:'C',
        400:'CD',
        500:'D',
        900:'CM',
        1000:'M'
    };
};

let match = function (result,num) {

};

let romanToInt = function (roman) {
    let result = 0;
    let obj = {
        'I':1,
        'IV':4,
        'V':5,
        'IX':9,
        'X':10,
        'XL':40,
        'L':50,
        'XC':90,
        'C':100,
        'CD':400,
        'D':500,
        'CM':900,
        'M':1000
    };
    for(let len = roman.length,i = len -1;i>=0; i--){
       if(i - 1 >= 0 && `${roman.charAt(i - 1)}${roman.charAt(i)}` in obj){
           result = result + obj[`${roman.charAt(i - 1)}${roman.charAt(i)}`];
           i--;
       }else{
           result = result + obj[roman.charAt(i)];
       }
    }
    return result;
};




console.log(intToRoman(401));

