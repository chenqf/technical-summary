/**
 * 递归函数
 * @param left  剩余的左括号
 * @param right 剩余的右括号
 * @param str  当前已拼装括号的字符串
 * @param list  最终结果集
 */
let helper = function (left,right,str,list) {
    //当前右括号大于左括号
    if (left > right){
        return ;
    }
    //左括号，右括号均无剩余，作为终值填充
    if(left === 0 && right === 0){
        list.push(str);
        return ;
    }
    //左括号有剩余
    if(left > 0){
        helper(left - 1,right,str + '(',list);
    }
    //右括号有剩余
    if(right > 0){
        helper(left,right - 1,str + ')',list);
    }
};

let generateParenthesis = function(n) {
    let list = [];
    helper(n,n,'',list);
    return list;
};

console.log(generateParenthesis(121));
