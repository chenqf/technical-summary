
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


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