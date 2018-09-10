
##  从中序与后序遍历序列构造二叉树
> 根据一棵树的中序遍历与后序遍历构造二叉树。     

### 注意
> 你可以假设树中没有重复的元素。   


### 树结构
```javascript 1.8
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
```

### 递归解法
```javascript 1.8
let buildTree = function(inorder,postorder) {
    if(!inorder.length || !postorder.length){
        return null;
    }
    let root = postorder[postorder.length - 1],
        inorderRootIndex = inorder.indexOf(root),
        leftNum = inorderRootIndex;
    let node = new TreeNode(root);
    node.left = buildTree(inorder.slice(0,inorderRootIndex),postorder.slice(0,leftNum));
    node.right = buildTree(inorder.slice(inorderRootIndex + 1),postorder.slice(leftNum,postorder.length - 1));
    return node;
};
```
