
/**
 * 递归函数
 * @param digits 传入的数字
 * @param index 当前是第几个数字
 * @param str 当前已拼装的字符串
 * @param list 结果集
 */
let helper = function (digits, index, str, list) {
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    if (str.length === digits.length) {
        list.push(str);
        return false;
    }
    let strs = map[digits[index]];
    for (let i = 0; i < strs.length; i++) {
        helper(digits, index + 1, str + strs.charAt(i), list)
    }
};
let letterCombinations1 = function (digits) {
    let list = [];
    if (digits) {
        helper(digits, 0, '', list);
    }
    return list;
};


let letterCombinations2 = function (digits) {
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    let res = [];
    for(let i = 0,len = digits.length; i<len; i++){
        let str = map[digits.charAt(i)];
        if(!res.length){
            for(let i = 0,len = str.length; i<len; i++){
                res.push(str.charAt(i));
            }
        }else{
            let r = [];
            for(let j = 0,length = res.length; j<length; j++){
                for(let i = 0,len = str.length; i<len; i++){
                    r.push(res[j] + str.charAt(i));
                }
            }
            res = r;
        }
    }
    return res;

};


console.log(letterCombinations1('234'));
console.log(letterCombinations2('234'));


