

```javascript 1.8
// 解法 1 使用 reduce
Array.prototype.flatten = function (depth = Infinity) {
    if(depth){
        return this.reduce((init,cur)=>{
            return init.concat(Array.isArray(cur)?cur.flatten(depth - 1):cur);
        },[]);
    }else{
        return this;
    }
};

// 解法 2
Array.prototype.flatten = function (depth = Infinity) {
    return [].concat(...this.map((i)=> Array.isArray(i) && depth ? i.flatten(depth - 1): i))
};

```