
##  二叉搜索树中第K小的元素
> 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。

### 示例 1
> 输入: root = [3,1,4,null,2], k = 1      
> 输出: 1

### 示例 2
> 输入: root = [5,3,6,2,4,null,null,1], k = 3     
> 输出: 3     

### 树定义
```javascript 1.8
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
```

### 解法
```javascript 1.8
let kthSmallest = function(root, k) {
    let list = [];
    let num = 0;
    let p = root;
    while (p || list.length){
        while(p){
            list.push(p);
            p = p.left;
        }
        let cur = list.pop();
        num++;
        if(num === k){
            return cur.val;
        }
        p = cur.right;
    }
};
```