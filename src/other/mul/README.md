

```javascript 1.8
function mul(x) {
    const result = (y)=>{
        return mul(x * y)
    };
    result.valueOf = ()=>x;
    return result;
}

console.log(mul(2)(3)(4)); // 24

```