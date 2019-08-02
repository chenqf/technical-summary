---
ct: 2019/08/02
---

# Object权限整理

## 扩展

`Object.isExtensible( obj )` 用于检测对象是否可以扩展（添加新属性）

+ true 可扩展
+ false 不可扩展

`Object.preventExtensions( obj )`将对象变为不可扩展，且操作`不可逆`

::: tip
仅阻止添加自身的属性，但仍然可以添加到对象的原型。
:::

### Object.preventExtensions 碰到数组

+ 不可通过`push`、`shift`、`splice`添加元素
+ 可以修改`length`增加数组长度,但不可对超限索引进行赋值

## 密封

`Object.isSealed( obj ) `用于检测对象是否为密封对象

+ true 密封对象
+ false 非密封对象

`Object.seal( obj )` 将对象变更为密封对象，且操作`不可逆`

+ `configurable`变更为`false`，且不可修改
+ 不可添加新属性
+ 不可删除属性
+ 属性描述不可变更

::: tip
不影响原型链上的属性，但不可以修改原型：</br>
`Object.setPrototypeOf `方法不可用
:::

### Object.seal 碰到数组

+ 不可通过`push`、`unshift`、`splice`添加元素
+ 可以修改`length`增加数组长度,但不可对超限索引进行赋值
+ 不可通过`pop`、`shift`、`splice`删除元素
+ 不可修改`length`减少数组长度

## 冻结

`Object.isFrozen( obj )` 用于检测是否对象已冻结

+ true：已冻结
+ false：未冻结

`Object.freeze( obj )`将对象冻结，且操作`不可逆`

+ 不可改
+ 不可删
+ 不可添加
+ 不可修改属性描述

::: tip
不影响原型链上的属性，但不可以修改原型：</br>
`Object.setPrototypeOf`方法不可用
:::

### Object.freeze 碰到数组

+ 不可通过`push`、`unshift`、`splice`添加元素
+ 不可修改`length`的长度
+ 不可通过`pop`、`shift`、`splice`删除元素
+ 不可通过`sort`、`reverse`等任何方式修改元素的值

## 总结

以上三种权限设置方法`preventExtensions`、`seal`、`freeze`均为非递归方法，对象中属性值为对象的情况下，不受父对象权限的影响。
