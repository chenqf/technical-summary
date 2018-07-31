
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
    let obj = getMap();
    while (result.num >= num){
        let n = parseInt(result.num /num);
        result.num = result.num % num;
        result.str = result.str + obj[num].repeat(n);
    }
};

let intToRoman = function (num) {
    if(num < 1 || num > 3999) throw Error('error');
    let obj = getMap();
    if(num in obj) return obj[num];
    let result = {
        str:'',
        num
    };
    match(result,1000);
    match(result,900);
    match(result,500);
    match(result,400);
    match(result,100);
    match(result,90);
    match(result,50);
    match(result,40);
    match(result,10);
    match(result,9);
    match(result,5);
    match(result,4);
    match(result,1);

    return result.str;
};




console.log(intToRoman(401));

