
##  从前序与中序遍历序列构造二叉树
> 根据一棵树的前序遍历与中序遍历构造二叉树。

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
let buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length){
        return null;
    }
    let root = preorder[0],
        inorderRootIndex = inorder.indexOf(root),
        inorderLeftLen = inorderRootIndex;
    let node = new TreeNode(root);
    node.left = buildTree(preorder.slice(1,1 + inorderLeftLen),inorder.slice(0,inorderRootIndex));
    node.right = buildTree(preorder.slice(1 + inorderLeftLen),inorder.slice(inorderRootIndex + 1));
    return node;
};
```
