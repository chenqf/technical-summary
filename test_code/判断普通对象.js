//找到对象的顶层原型
const isPlainObject = obj => {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    let proto = obj
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(obj) === proto
}

const A = Object.create(null);
const B = Object.create(A);
isPlainObject(B) === true; // 需要注意这个情况