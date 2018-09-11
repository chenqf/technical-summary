
## 完全二叉树的节点个数
> 给出一个完全二叉树，求出该树的节点个数。


### 说明
+ 完全二叉树：
+ 除最底层节点外，其余每层节点都达到最大值，并且最下面一层节点从左至右连续的紧密排列        
+ 若最底层为第 h 层，则该层包含 1~ Math.pos(2,h - 1) 个节点

### 树结构
```javascript 1.8
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }
```

### 递归解法
```javascript 1.8
let countNodes = function(root) {
    if(!root){
        return 0;
    }
    let left = root.left,
        n1 = 1,
        right = root.right,
        n2 = 1;
    while (left){
        n1++;
        left = left.left;
    }
    while (right){
        n2++;
        right = right.right;
    }
    if(n1 === n2){
        return Math.pow(2,n1) -1;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
};
```