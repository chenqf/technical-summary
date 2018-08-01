
let obj = {
    2:'abc',
    3:'def',
    4:'ghi',
    5:'jkl',
    6:'mno',
    7:'pqrs',
    8:'tuv',
    9:'wxyz'
};
/**
 * 递归函数
 * @param digits 传入的数字
 * @param index 当前是第几个数字
 * @param str 当前已拼装的字符串
 * @param list 结果集
 */
let helper = function (digits,index,str,list) {
    if(str.length === digits.length){
        list.push(str);
        return false;
    }
    let strs = obj[digits[index]];
    for(let i = 0; i<strs.length; i++){
        helper(digits,index +1,str + strs.charAt(i),list)
    }
};

let letterCombinations = function (digits) {
    let list = [];
    if(digits){
        helper(String(digits),0,'',list);
    }
    return list;
};

console.log(letterCombinations(23));