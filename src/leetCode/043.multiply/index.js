



let multiply = function (num1, num2) {
    let temp = [];
    let res = '';
    let len1 = num1.length,
        len2 = num2.length;

    for (let i = len1 - 1; i >= 0; i--) {
        let s1 = len1 - 1 - i;
        for(let j = len2 - 1; j>=0; j--){
            let s2 = len2 - 1 - j;
            temp[s1 + s2] = (temp[s1 + s2] || 0) + num1[i] * num2[j];
        }
    }
    for(let i = 0; i<temp.length; i++){
        let cur = temp[i];
        if(cur >= 10){
            temp[i + 1] = (temp[i + 1] || 0) + ~~(cur/10);
            temp[i] = cur%10;
        }
    }

    let i = temp.length - 1;
    while (i>=0){
        if(i=== 0 || temp[i] !== 0){
            temp.length = i + 1;
            break;
        }
        i--;
    }

    return temp.reverse().join(',');
};
