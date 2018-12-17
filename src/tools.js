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
//获取对象或数组中的深层属性
const deepGet = (data,key)=> (new Function('data',`try{ return data.${key} }catch(e){}`))(data);

//排除精度，判断数字是否相等
const numberEqual = (a,b)=>Math.abs((a - b)) <= Number.EPSILON;

//是否是负零
const isMinusZero = num => 0 === num && 1/num === -Infinity;

//真正的四舍五入
const rounding = (n,decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

//将数组按照函数规则进行拆分为两个数组
const partition = (arr, isValid) =>arr.reduce(([pass, fail], elem) =>isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]],[[], []]);

//是否是简单对象
const isPlainObject = (obj)=>{
    if(typeof obj !== 'object' || obj === null) return false;
    let prop = obj;
    //找到顶层 Object 的 prototype 属性
    while (Object.getPrototypeOf(prop) !== null){
        prop = Object.getPrototypeOf(prop);
    }
    return Object.getPrototypeOf(obj) === proto;
};

//连接函数
const compose = (...funcs)=> {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

//判断是否存在
const exsity = (x)=> x !== null && x !== undefined;

//判断对象是否被认为是true的同义词
const truthy = (x)=> x !== false && exsity(x);



