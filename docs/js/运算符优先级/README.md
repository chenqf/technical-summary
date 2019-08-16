---
ct: 2019/08/14
ut: 2019/08/16
---
# 运算符优先级

从各种题目来看运算符优先级

## 题目1

```javascript
('b' + 'a' + + 'a' + 'a').toLowerCase();
```

先看运算符优先级

| 优先级| 运算类型 | 关联性   | 运算符    |
|-------|----------|----------|-----------|
| 20    | 圆括号   | n/a      | `(...)`     |
| 16    | 一元加法 | 从右至左 | `+ ...`     |
| 13    | 加法     | 从左至右 | `... + ...` |

将`toLowerCase`去掉

```javascript
'b' + 'a' + + 'a' + 'a'
//to
'b' + 'a' + (+ 'a') + 'a'
```

其中 `+'a'`会将`'a'`转化为数字

```javascript
'b' + 'a' + + 'a' + 'a'
//to
'b' + 'a' + Number('a') + 'a'
//to
'b' + 'a' + NaN + 'a'
//to
'baNaNa'
```

再经过`toLowerCase`后：

```javascript
('b' + 'a' + + 'a' + 'a').toLowerCase();
//to
'banana'
```

## 题目2

```javascript
typeof 1/1
// => NaN
typeof 1 + 1
// => 'number1'
typeof typeof 1
// => 'string'
typeof {} instanceof Object
// => false
```

`typeof`的优先级高于`+``-`和`instanceof`

与`typeof`优先级相同的操作符

+ `++`
+ `--`
+ `-`(求反)
+ `+`(转换为数字)
+ `~`
+ `！`
+ `delete`
+ `typeof`
+ `void`
