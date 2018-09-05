
## 二叉树的后序遍历
> 给定一个二叉树，返回它的 后序 遍历。



### 示例
> 输入: [1,null,2,3]          
> 输出: [3,2,1]   




### 树结构
```javascript 1.8
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
```

### 递归解法
```javascript 1.8
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
```

### 调用栈解法
```javascript 1.8
let postorderTraversa = function (root) {
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
```
 