

let isPalindrome = function(s) {
    if(!s){
        return true;
    }
    s = s.toLowerCase().replace(/[^\w]/g,'');
    let i = 0,j = s.length - 1;

    while (i <= j){
        if(s[i] !== s[j]){
            return false;
        }else{
            i ++;
            j --;
        }
    }
    return true;
};