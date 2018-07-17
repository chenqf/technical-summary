
/**
 *  取并集
 */
function union(...args) {
    return [...new Set([].concat(...args))]
}
/**
 * 取交集
 */
function intersection(...args) {
    return [...new Set([].concat(...args))].filter((i)=>{
        return args.every((j)=>{
            return new Set(j).has(i);
        })
    });
}
/**
 * 取差集（补集）
 * @param list
 * @param args
 * @returns {Array.<*>}
 */
function difference (list,...args) {
    return [...new Set(list)].filter((i)=>{
        return !new Set([].concat(...args)).has(i)
    })
}



