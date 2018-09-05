
## 最小栈
> 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。 
+ push(x) -- 将元素 x 推入栈中。
+ pop() -- 删除栈顶的元素。
+ top() -- 获取栈顶元素。
+ getMin() -- 检索栈中的最小元素。



### 示例
> MinStack minStack = new MinStack();       
> minStack.push(-2);        
> minStack.push(0);     
> minStack.push(-3);    
> minStack.getMin();   --> 返回 -3.   
> minStack.pop();   
> minStack.top();      --> 返回 0.    
> minStack.getMin();   --> 返回 -2.   



### 解法
```javascript 1.8
let MinStack = function() {
    this.list = [];
};

MinStack.prototype.push = function(x) {
    return this.list.push(x);
};

MinStack.prototype.pop = function() {
    return this.list.pop();
};

MinStack.prototype.top = function() {
    return this.list[this.list.length - 1]
};

MinStack.prototype.getMin = function() {
    return Math.min.apply(Math,this.list);
};
```
