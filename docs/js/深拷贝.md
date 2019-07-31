---
ct: 2019/07/30
---

# 深拷贝

## 不考虑循环引用

```javascript
function clone(data){
    if(typeof data !== 'object'){
        return data;
    }
    let keys = Object.keys(data);
    let result = Array.isArray(data) ? [] : {}
    keys.forEach(key=>{
        if(typeof data[key] === 'object'){
            result[key] = clone(data[key]);
        }else{
            result[key] = data[key]
        }
    })
    return result;
}
```

## 考虑循环引用

使用 `map` 保存处理过的数据，当再次处理的时候，直接获取前一次的处理结果

```javascript
const clone = function(data){
    let map = new WeakMap();
    function dp(obj){
        if(typeof obj !== 'object'){
            return obj;
        }
        let o = map.get(obj);
        if(o){
            return o;
        }
        let result = Array.isArray(obj) ? [] : {};
        map.set(obj,result);
        let keys = Object.keys(obj);
        keys.forEach(key=>{
            if(typeof obj[key] === 'object'){
                result[key] = dp(obj[key])
            }else{
                result[key] = obj[key];
            }
        })
        return result;
    }
    return dp(data);;
}
```