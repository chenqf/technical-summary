---
ct: 2019/07/31
---

# Object & Function

## 鸡生蛋 & 蛋生鸡

```javascript
console.log(Object instanceof Function)   // true
console.log(Function instanceof Object)   // true
console.log(Object instanceof Object)     // true
console.log(Function instanceof Function) // true
```

## Function

+ `Function.prototype`
  + 是一个函数
  + 没有`prototype`属性
  + 原型`__proto__` 等于`Object.prototype`
+ `Function.__proto__`
  + 与`Function.prototype`相等

```javascript
typeof Function.prototype === 'function'
typeof Function.prototype.prototype === 'undefined'
Function.prototype.__proto__ === Object.prototype
Function.__proto__ === Function.prototype
```

## Object

+ `Object.__proto__`
  + 与`Function.prototype`相等

```javascript
Object.__proto__ === Function.prototype
```

## 推导

```javascript
//因为
Object.__proto__ === Function.prototype
//所以
Object instanceof Function === true
```

```javascript
//因为
Function.__proto__ === Function.prototype
//所以
Function instanceof Function === true
```

```javascript
//因为
Function.__proto__ === Function.prototype
//并且
Function.prototype.__proto__ === Object.prototype
//所以
Function.__proto__.__proto__ === Object.prototype
Function instanceof Object === true
```

```javascript
//因为
Object.__proto__ === Function.prototype
//并且
Function.prototype.__proto__ === Object.prototype
//所以
Object.__proto__.__proto__ === Object.prototype
Function instanceof Object === true
```

## 关键点

```javascript
Function.__proto__ === Function.prototype;
Object.__proto__ === Function.prototype;
Function.prototype.__proto__ === Object.prototype;
```

## 经典图

![](./1.png)