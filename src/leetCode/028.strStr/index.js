

let strStr = function(haystack, needle) {
    if(needle === '') return 0;
    let len1 = haystack.length;
    let len2 = needle.length;
    if(len1 === len2) return haystack === needle ? 0 : -1;
    for(let i = 0; i<len1 - len2 + 1; i++){
        let index = i;
        let start = 0;
        while (haystack[index] === needle[start] && start < len2){
            index++;
            start++;
        }
        if(start === len2){
            return i;
        }
    }
    return -1;
};

console.log(strStr("mississippi",'pi'));