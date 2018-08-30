

let reverseString = function(s) {
    let i = 0,j = s.length - 1;
    let list = s.split('');
    while (i < j){
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
        i++;
        j--;
    }
    return list.join('');
};