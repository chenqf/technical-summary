

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
