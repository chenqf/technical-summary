

let findLongestWord = function(s, d) {
    if(!s || !d.length){
        return '';
    }
    let res = '';
    for(let i = 0,len = d.length; i<len; i++){
        let k = 0;
        let word = d[i];
        for(let j = 0,l = s.length; j<l; j++){
            if(s[j] === word[k]){
                k++
            }
        }
        if(k === word.length){
            if(word.length > res.length){
                res = word;
            }else if(word.length === res.length){
                res = word[0].charCodeAt(0) < res[0].charCodeAt(0) ? word : res;
            }
        }
    }
    return res;
};