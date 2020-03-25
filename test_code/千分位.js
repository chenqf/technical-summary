// 1 原生

const f1 = number => number.toLocaleString('en-US');

//2 正则

//弄出最后一个逗号
const f2 = number => String(number).replace(/(?=\d{3}$)/, ',')

//弄出所有逗号
const f3 = number => String(number).replace(/(?=(\d{3})+$)/g, ',')

//匹配到的位置不能是开头
const f4 = number => String(number).replace(/(?!^)(?=(\d{3})+$)/g, ',')

//支持小数和负号
const f5 = number => String(number).replace(/(?!\b)(?=(\d{3})+\b)/g, ',')
const f6 = number => String(number).replace(/\B(?=(\d{3})+\b)/g, ',')

console.log(f5('-123123123.33444'));