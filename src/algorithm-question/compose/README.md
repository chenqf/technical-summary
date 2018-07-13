

```javascript 1.8
let compose = function (func) {
    return function (arg) {
        return func.reduceRight(function (composed, fn) {
            return fn(composed);
        }, arg)
    }
};
```