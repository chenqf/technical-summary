

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
root.right = new TreeNode(6);


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