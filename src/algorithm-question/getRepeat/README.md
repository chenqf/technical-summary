

```javascript 1.8
/**
 * 不考虑 NaN 和 稀疏元素的情况下
 */
function getRepeat(list) {
    let result = list.filter((i)=>{
        return list.indexOf(i) !== list.lastIndexOf(i);
    })
    return [...new Set(result)]
}
```