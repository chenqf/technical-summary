
## 二叉树的中序遍历
> 给定一个二叉树，返回它的中序 遍历。        

### 说明
> 二叉树中序遍历，左中右



### 示例 1
> 输入: 输入: [1,null,2,3]          
> 输出: [1,3,2]


### 树结构
```javascript 1.8
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
```

### 递归解法
```javascript 1.8
let helper = function (root,res) {
    if(!root){
        return ;
    }
    helper(root.left,res);
    res.push(root.val);
    helper(root.right,res);
};

let inorderTraversal = function(root) {
    let res = [];
    helper(root,res);
    return res;
};

```

### 调用栈解法
```javascript 1.8
let inorderTraversal = function(root) {
    let res = [];
    let p = root;
    let list = [];
    while (p || list.length){
        while (p){
            list.push(p);
            p = p.left;
        }
        let cur = list.pop();
        res.push(cur.val);
        p = cur.right;
    }
    return res;
};
```
