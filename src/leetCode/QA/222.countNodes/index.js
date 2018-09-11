


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(1);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(1);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(1);

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