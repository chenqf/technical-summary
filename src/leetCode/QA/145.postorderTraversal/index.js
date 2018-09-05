

let helper = function (root,res) {
    if(!root){
        return ;
    }
    helper(root.left,res);
    helper(root.right,res);
    res.push(root.val);
};


let postorderTraversal = function(root) {
    let res = [];
    helper(root,res);
    return res;
};



let postorderTraversal1 = function (root) {
    if(!root){
        return [];
    }
    let list = [root];
    let res = [];
    let head = root;
    while (list.length){
        let cur = list[list.length - 1];
        if((!cur.left && !cur.right) || cur.left === head || cur.right === head){
            res.push(cur.val);
            head = cur;
            list.pop();
        }else{
            if(cur.right){
                list.push(cur.right);
            }
            if(cur.left){
                list.push(cur.left);
            }
        }
    }
    return res;
};