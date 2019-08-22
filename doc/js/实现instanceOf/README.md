---
ct: 2019/08/14
---
# 实现instanceOf

实现方法`instance_of`用于模拟实现JS中原生的`instanceof`

```javascript
function instance_of(L,R){
    //L 表示左表达式，R 表示右表达式
    let O = R.prototype;
    L = Object.getPrototypeOf(L)
    while(true){
        if(L === null){
            return false;
        }
        if(O === L){
            return true;
        }
        L = Object.getPrototypeOf(L)
    }
}
```
