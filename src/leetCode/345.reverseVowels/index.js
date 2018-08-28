

let reverseVowels = function(s) {
    let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let list = [...s];
    let len = list.length;
    if(len <= 1){
        return s;
    }
    let i = 0,j = len - 1;
    while (i<j){
        while (!set.has(list[i]) && i<j){
            i++;
        }
        while (!set.has(list[j]) && i<j){
            j--;
        }
        if(i<j){
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
            i++;
            j--;
        }

    }
    return list.join('');
};

console.log(reverseVowels('hello'));