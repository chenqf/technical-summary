

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


let inorderTraversal1 = function(root) {
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
