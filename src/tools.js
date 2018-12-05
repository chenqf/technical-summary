// @flow Created by 陈其丰 on 2018/12/5.

// 去除数组中的 falsy 值
const compact = arr => arr.filter(Boolean);

//判断字符串中是否含有元音字母
const isVowel = char => ["a", "e", "o", "i", "u"].includes(char);
const containsVowel = str => [...str].some(isVowel);

//多层数组转换为一层数组
const flatten = arr => Array.isArray(arr) ? [].concat(...arr.map(i=>flatten(i))): arr;

//将数组转成对象，key/value 对应里层数组的两个值
const fromPairs = pairs => pairs.reduce((res,cur)=>(res[cur[0]] = cur[1],res),{});

//取出对象中的深层属性
const pluckDeep = path => obj => path.split(',').reduce((map,attr)=>map[attr],obj);