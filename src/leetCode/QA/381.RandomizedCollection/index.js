



/**
 * Initialize your data structure here.
 */
const RandomizedCollection = function() {
    this.list = [];
    this.indexMap = new Map();
    this.map = new Map();
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    this.map.set(val,(this.map.get(val) || 0) + 1);
    this.list.push(val);
    if(this.indexMap.has(val)){
        this.indexMap.get(val).push(this.list.length - 1)
        return false;
    }else{
        this.indexMap.set(val,[this.list.length - 1])
        return true;
    }

};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if(!this.map.has(val)){
        return false;
    }
    let num = this.map.get(val);
    let lastVal = this.list[this.list.length - 1];
    let lastList = this.indexMap.get(lastVal);
    let deleteList = this.indexMap.get(val);
    let deleteIndex = deleteList[deleteList.length - 1];
    this.list[deleteIndex] = lastVal;
    this.list.pop();
    lastList[lastList.length - 1] = deleteIndex;
    lastList.sort((a,b)=>a-b);
    deleteList.pop();
    if(num === 1){
        this.map.delete(val);
        this.indexMap.delete(val);
    }else{
        this.map.set(val,num - 1);
    }
    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    return this.list[Math.floor(this.list.length * Math.random())];
};

function test(list,arg) {
    var ins = null;
    for(let i = 0; i<list.length; i++){
        if(i !== 0){
            let a = ins[list[i]].apply(ins,arg[i])
            console.log(a);
        }else{
            ins = new RandomizedCollection
        }
    }
}

test(["RandomizedCollection","insert","insert","insert","insert","insert","insert","remove","remove","remove","remove","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom"],
    [[],[1],[1],[2],[1],[2],[2],[1],[2],[2],[2],[],[],[],[],[],[],[],[],[],[]])