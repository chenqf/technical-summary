
## O(1) 时间插入、删除和获取随机元素 - 允许重复
> 设计一个支持在平均 时间复杂度 O(1) 下， 执行以下操作的数据结构。
### 注意: 
> 允许出现重复元素。
+ insert(val)：向集合中插入元素 val。
+ remove(val)：当 val 存在时，从集合中移除一个 val。
+ getRandom：从现有集合中随机获取一个元素。每个元素被返回的概率应该与其在集合中的数量呈线性相关。

### 示例 1
```javascript 1.8
// 初始化一个空的集合。
RandomizedCollection collection = new RandomizedCollection();

// 向集合中插入 1 。返回 true 表示集合不包含 1 。
collection.insert(1);

// 向集合中插入另一个 1 。返回 false 表示集合包含 1 。集合现在包含 [1,1] 。
collection.insert(1);

// 向集合中插入 2 ，返回 true 。集合现在包含 [1,1,2] 。
collection.insert(2);

// getRandom 应当有 2/3 的概率返回 1 ，1/3 的概率返回 2 。
collection.getRandom();

// 从集合中删除 1 ，返回 true 。集合现在包含 [1,2] 。
collection.remove(1);

// getRandom 应有相同概率返回 1 和 2 。
collection.getRandom();
```

### 解法
```javascript 1.8
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
```