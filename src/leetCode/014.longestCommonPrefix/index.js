






let longestCommonPrefix = function(strs) {
    let firstStr = strs[0];
    let result ='';
    if(!strs.length){
        return result;
    }
    for (let i = 0; i < firstStr.length; i++) {
        for (let j =  1; j < strs.length; j++) {
            if(firstStr.charAt(i) !== strs[j].charAt(i)){
                return result;
            }
        }
        result = result + firstStr.charAt(i);
    }
    return result;

};
console.log(longestCommonPrefix(["flower","flow","flight"]));
