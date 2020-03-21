/**
 * 单一逻辑抽象为函数
 * 根据业务组合为复杂的功能
 * 业务变更无需更改原有封装的代码
 * 只需新增抽象函数
 * 进行重新组合
 */

const compose = (...fns) => {
    return x => {
        return fns.reduceRight((cur, init) => init(cur), x);
    }
}

const pipe = (...fns) => {
    return x => {
        return fns.reduce((cur, init) => init(cur), x);
    }
}



const f1 = x => x + 2;
const f2 = x => x * 3;
const f3 = x => x - 10;
const x = 5;

const result1 = compose(f1, f2, f3)(5);
const result2 = pipe(f1, f2, f3)(5);

console.log('result1', result1);
console.log('result2', result2);