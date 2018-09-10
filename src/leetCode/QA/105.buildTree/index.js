
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


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