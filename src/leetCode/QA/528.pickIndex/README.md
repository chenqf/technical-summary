
## 按权重随机选择
> 给定一个正整数数组 w ，其中 w[i] 代表位置 i 的权重，请写一个函数 pickIndex ，它可以随机地获取位置 i，选取位置 i 的概率与 w[i] 成正比。  

### 说明
+ 1 <= w.length <= 10000
+ 1 <= w[i] <= 10^5
+ pickIndex 将被调用不超过 10000 次



### 解法
```javascript 1.8
/**
 * @param {number[]} w
 */
const Solution = function(w) {
    this.list = [];
    this.sum = 0;
    for(let i = 0;i<w.length; i++){
        this.list.push([this.sum,this.sum + w[i] - 1]);
        this.sum = this.sum + w[i];
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let index = ~~(Math.random() * this.sum);
    let left = 0,
        right = this.list.length - 1;
    while (left <= right){
        let mid = ~~((left + right)/2),
            arr = this.list[mid];
        if(arr[0] <= index && index <= arr[1]){
            return mid;
        }else if(index < arr[0]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
};
```
