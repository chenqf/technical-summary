
## 目录
+ 尝试使用break 和return    
+ MDN给出的官方解释 
+ 探究为什么break和return不行     
+ 如何变通跳出forEach循环   

## 尝试使用break 和return

#### 1. 首先尝试一使用return语句----木有效果
```javascript 1.8
[1,2,3,4,5].forEach(item=>{
    if(item===2){
        return
    }
    console.log(item);
})
```

#### 2. 在尝试一下使用break语句----报错
```javascript 1.8
[1,2,3,4,5].forEach(item=>{
    if(item===2){
        break
    }
    console.log(item);
})
```

#### 3. MDN给出的官方解释

为什么会出现这样的情况？先看一下官方文档的说明。

There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

注意： 没有办法中止或者跳出 forEach() 循环，除了抛出一个异常。如果你需要这样，使用 forEach() 方法是错误的。

若你需要提前终止循环，你可以使用：

+ 简单循环
+ [for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环
+ [Array.prototype.every()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
+ [Array.prototype.some()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
+ [Array.prototype.find()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
+ [Array.prototype.findIndex()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

## 三. 探究为什么break和return不行

#### forEach 的实现方式
```javascript
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  const rs = (function(item) {
    console.log(item);
    if (item > 2) return false;
  })(arr[i])
}
```
使用return语句相当于在每个自执行函数中将返回值复制给rs，但是实际对整个函数并没有影响。而使用break语句报错是因为再JS的解释器中break语句是不可以出现在函数体内的。

## 四. 如何变通跳出forEach循环

### 1. MDN官方推荐的方法
使用 some 和 every
```javascript
// every在碰到return false的时候，中止循环。some在碰到return ture的时候，中止循环。
var a = [1, 2, 3, 4, 5]
a.every(item=>{
    console.log(item); //输出：1,2
    if (item === 2) {
        return false
    } else {
        return true
    }
})
var a = [1, 2, 3, 4, 5]
a.some(item=> {
    console.log(item); //输出：1,2
    if (item === 2) {
        return true
    } else {
        return false
    }
})
```

### 2.其他方法

#### 1) 使用for循环或者for in 循环代替
#### 2) 使用throw抛出异常
```javascript
try {
  [1, 2, 3, 4, 5].forEach(function(item) {
    if (item=== 2) throw item;
    console.log(item);
  });
} catch (e) {}
```
#### 3) 使用判断跑空循环
```javascript
var tag;
[1, 2, 3, 4, 5].forEach(function(item){
    if(!tag){
        console.log(item);
        if(item===2){
            tag=true;
        }
    }
})
```
这样做有两个问题:

第一个问题，全局增加了一个tag变量

第二个问题，表面上看是终止了forEach循环，但是实际上循环的次数并没有改变，只是在不满足条件的时候callback什么都没执行而已.

先来解决第一个问题，如何删除全局下新增的tag变量,实际上forEach还有第二个参数，表示callback的执行上下文，也就是在callback里面this对应的值。因此我们可以讲上下文设置成空对象，这个对象自然没有tag属性，因此访问this.tag的时候会得到undefined.

```javascript
[1, 2, 3, 4, 5].forEach(function(item){
    if(!this.tag){
        console.log(item);
        if(item===2){
            this.tag=true;
        }
    }
},{})
```
#### 4) 修改索引 
```javascript
var array=[1, 2, 3, 4, 5]
array.forEach(item=>{
  if (item == 2) {
    array = array.splice(0);
  }
  console.log(item);
})
```
#### 5) forEach的执行细节：

遍历的范围在第一次执行callback的时候就已经确定，所以在执行过程中去push内容，并不会影响遍历的次数，这和for循环有很大区别，下面的两个案例一个会造成死循环一个不会

```javascript
var arr=[1,2,3,4,5]
//会造成死循环的代码
for(var i=0;i<arr.length;i++){
    arr.push('a')
}
//不会造成死循环
arr.forEach(item=>arr.push('a'))
```
如果已经存在的值被改变，则传递给 callback 的值是 forEach 遍历到他们那一刻的值。
```javascript
var arr=[1,2,3,4,5];
arr.forEach((item,index)=>{
    console.log(`time ${index}`)
    arr[index+1]=`${index}a`;
    console.log(item)
})
```
已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了（例如使用 [shift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)），之后的元素将被跳过。
```javascript
var arr=[1,2,3,4,5];
arr.forEach((item,index)=>{
    console.log(item)
    if(item===2){
        arr.length=index;
    }
})
```
在满足条件的时候将后面的值截掉，下次循环的时候照不到对应的值，循环就结束了，但是这样操作会破坏原始的数据，因此我们可以使用一个小技巧，即将数组从0开始截断，然后重新赋值给数组也就是array=array.splice(0)

