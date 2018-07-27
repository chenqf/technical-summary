// @flow Created by 陈其丰 on 2018/7/26.

let lengthOfLongestSubstring = function (str) {
    let result = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let set = new Set();
        set.add(str.charAt(i));
        for (let j = i + 1; j < len; j++) {
            if (set.has(str.charAt(j))) {
                break;
            }
            set.add(str.charAt(j));
        }
        result = Math.max(result,set.size);
    }
    return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));