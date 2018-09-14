




/**
 * Initialize your data structure here.
 */
const RandomizedSet = function() {
    this.list = [];
    this.map = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    debugger
    if(this.map.has(val)){
        return false;
    }
    this.list.push(val);
    this.map.set(val,this.list.length - 1);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)){
        return false;
    }
    let valIndex = this.map.get(val),
        lastIndex = this.list.length - 1,
        lastVal = this.list[lastIndex];
    if(this.map.delete(val)){
        if(lastIndex !== valIndex){
            this.list[valIndex] = lastVal;
            this.map.set(lastVal,valIndex);
        }
        this.list.length = lastIndex;
        return true;
    }else{
        return false;
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let len = this.list.length;
    let index = ~~(Math.random() * len);
    return this.list[index];
};