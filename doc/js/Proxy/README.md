---
ct: 2019/08/05
ut: 2019/08/07
---

# Proxy

`Proxy` 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种`元编程`，即对编程语言进行编程。

`Proxy` 可以理解成，在目标对象之前架设一层`拦截`，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行`过滤`和`改写`。

## 实例方法

### get(target,propKey,receiver)

+ `target` 目标对象
+ `propKey` 属性名
+ `receiver` **读操作所在的对象**

需要注意的是：`get方法可以被继承`，当对象的原型为proxy，对非自身属性取值时，会触发proxy的get

**数组读取负数的索引：**

```javascript
let list = ['a','b','c'];
let p = new Proxy(list,{
    get:function(target,propKey,receiver){
        let index = Number(propKey);
        let key = index < 0 ? target.length + index : index
        return target[key];
    }
})

p[-1]; // c
```

**receiver指向的是读操作所在的对象：**

```javascript
const proxy = new Proxy({}, {
    get: function (target, property, receiver) {
        console.log(receiver === d); // true
        return receiver;
    }
});

const d = Object.create(proxy);
d.a === d // true
```

**属性 configurable：false 并且 writable：false 时，不能通过get修改其属性：**

```javascript{4,5}
const obj = Object.defineProperties({}, {
    foo: {
        value: 123,
        writable: false, // 二者必须都为false
        configurable: false // 二者必须都为false
    },
});
```

```javascript{3}
const proxy = new Proxy(obj, {
    get(target, propKey) {
        return 123;
    }
});
proxy.foo // 返回的值与value相同，不报错
```

```javascript{3}
const proxy = new Proxy(obj, {
    get(target, propKey) {
        return 'abc';
    }
});
proxy.foo // 返回的值与value不同，报错
```

### set(target,prop,value,receiver)

+ `target` 目标对象
+ `prop` 属性名
+ `value` 属性值
+ `receiver` **赋值操作行为所在的对象**

需要注意的是：`set方法可以被继承`，当对象的原型为proxy，对非自身属性赋值时，会触发proxy的set

**用于属性赋值时的校验（年龄必须为不大于200的整数）：**

```javascript
let validator = {
    set: function (obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }
        // 对于满足条件的 age 属性以及其他属性，直接保存
        obj[prop] = value;
    }
};

let person = new Proxy({}, validator);

person.age = 100;

person.age // 100
person.age = 'young' // 报错
person.age = 300 // 报错
```

**receiver指向的是赋值操作所在的对象：**

```javascript
const handler = {
    set: function (obj, prop, value, receiver) {
        obj[prop] = receiver;
    }
};
const proxy = new Proxy({}, handler);
const myObj = {};
Object.setPrototypeOf(myObj, proxy);

myObj.foo = 'bar';
myObj.foo === myObj // true
```

### apply(target,ctx,args)

用于拦截`函数的调用`、`call`和`apply`操作。

+ `target` 目标对象
+ `ctx` 目标对象的上下文（`this`）
+ `args` 目标对象的参数数组

```javascript
function fn(a,b){
    return a + b;
}
let p = new Proxy(fn,{
    apply(target,ctx,args){
        console.log(ctx === obj) // true;
        return target.apply(ctx,args) * 2
    }
})
let obj = {
    fn:p
}
let res = obj.fn(1,2); // 6
```

### has(target,key)

用于拦截对象是否具有某个属性，典型操作就是`in`。

+ `target` 目标对象
+ `key` 属性名

**隐藏某些属性，不被`in`运算符发现：**

```javascript
let handler = {
    has(target, key) {
        if (key[0] === '_') {
            return false;
        }
        return key in target;
    }
};
let target = {
    _prop: 'foo',
    prop: 'foo'
};
let proxy = new Proxy(target, handler);
'_prop' in proxy // false
```

**对象不可扩展或属性不可配置，使用`has`拦截返回`false`会报错：**

```javascript
let obj = { a: 10 };
Object.preventExtensions(obj);

let p = new Proxy(obj, {
  has: function(target, prop) {
    return false;
  }
});

'a' in p // TypeError is thrown
```

```javascript
let obj = { a: 10 };
Object.defineProperties(obj,'a',{
    configurable:false
})

let p = new Proxy(obj, {
  has: function(target, prop) {
    return false;
  }
});

'a' in p // TypeError is thrown
```

**`has`对`for···in`不生效**

```javascript
let p = new Proxy({a:1,b:2},{
    has(target,key){
        return false;
    }
})
for(let i in p){
    console.log(i);
}
// a b
```

### construct(target,args,newTarget)

`construct`用于拦截`new`命令。

+ `target` 目标对象
+ `args` 构造函数的参数
+ `newTarget` **执行`new`操作的构造函数**

**`construct`必须返回一个对象：**

```javascript
let p = new Proxy(function() {}, {
  construct: function(target, argumentsList) {
    return 1;
  }
});

new p() // 报错
```

**`newTarget`指代执行`new`操作的构造函数：**

```javascript
let C = function(a,b){
    this.a = a;
    this.b = b;
}

let P = new Proxy(C,{
    construct(target,args,newTarget){
        console.log(target === C); // true
        console.log(newTarget === P); // true
        let list = args.map(i=>i * 10)
        return new C(...list);
    }
})

let p = new P(1,2);
console.log(p); // { a: 10, b: 20 }
```

### deleteProperty(target,key)

`deleteProperty`用于拦截`delete`操作。

+ `target` 目标对象
+ `key` 属性值

**如果`抛出错误`或返回`false`，则无法删除属性**

```javascript
let obj = {a:1};
let p = new Proxy(obj,{
    deleteProperty(target,key){
        return false;
    }
})

delete p.a;
console.log(obj.a); // 1
```

**若属性`configurable:false`，则不能被`deleteProperty`删除**

```javascript
let obj = {a:1};
Object.defineProperty(obj,'a',{
    configurable:false
})
let p = new Proxy(obj,{
    deleteProperty(target,key){
        return true;
    }
})

delete p.a; // 提示错误，没有删除成功
```

### defineProperty(target,key)

`defineProperty`用于拦截了`Object.defineProperty`操作。

```javascript
let handler = {
    defineProperty(target, key, descriptor) {
        return false;
    }
};
let target = {};
let proxy = new Proxy(target, handler);
proxy.foo = 'bar' // 不会生效
```

### getPrototypeOf(target)

用于拦截以下这些获取原型的操作：

+ `getPrototypeOf()`
+ `isPrototypeOf()`
+ `__proto__`
+ `instanceof`

```javascript
let proto = {};
let p = new Proxy({}, {
  getPrototypeOf(target) {
    return proto;
  }
});
Object.getPrototypeOf(p) === proto; // true
```


### setPrototypeOf(target,proto)

`setPrototypeOf`方法主要用来拦截`Object.setPrototypeOf`方法

**必须返回一个`boolean`值，`false`时报错**

```javascript
let proto = {};
let proxy = new Proxy({}, {
    setPrototypeOf(target, p) {
        return false;
    }
});
Object.setPrototypeOf(proxy, proto); // 报错
proxy.__proto__ = proto  // 报错
```

**容许修改原型时，返回`true`,并修改`target`的原型**

```javascript
let proto = {};
let proxy = new Proxy({}, {
    setPrototypeOf(target, p) {
        Object.setPrototypeOf(target,p)
        return true;
    }
});
Object.setPrototypeOf(proxy, proto);
proxy.__proto__ = proto  
```
