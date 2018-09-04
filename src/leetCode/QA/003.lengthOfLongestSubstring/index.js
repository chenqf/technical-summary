// @flow Created by 陈其丰 on 2018/7/26.

let lengthOfLongestSubstring = function (str) {
    let res = 0,i = 0,j = 0,len = str.length;
    let set = new Set();
    while (i < len && j < len ){
        if(!set.has(str.charAt(i))){
            set.add(str.charAt(i));
            i++;
            res = Math.max(res,i - j)
        }else{
            set.delete(str.charAt(j));
            j++;
        }
    }
};

console.log(lengthOfLongestSubstring("abcabcbb"));