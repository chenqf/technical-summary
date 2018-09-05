

let helper = function (root,res) {
    if(!root){
        return ;
    }
    res.push(root.val);
    helper(root.left,res);
    helper(root.right,res);
};


let preorderTraversal = function(root) {
    let res = [];
    helper(root,res);
    return res;
};



let preorderTraversal1 = function (root) {
    if(!root){
        return [];
    }
    let res = [];
    let list = [root];
    while (list.length){
        let cur = list.pop();
        res.push(cur.val);
        if(cur.right){
            list.push(cur.right)
        }
        if(cur.left){
            list.push(cur.left)
        }
    }
    return res;
};