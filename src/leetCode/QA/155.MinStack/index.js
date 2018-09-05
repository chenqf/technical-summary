

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