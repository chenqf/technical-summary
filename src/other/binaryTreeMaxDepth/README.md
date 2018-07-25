
![avatar](https://raw.githubusercontent.com/chenqf/technical-summary/master/src/other/binaryTreeMaxDepth/img.jpg)
```javascript 1.8
// 二叉树结构如下,left代表左侧节点，right代表右侧节点(如上图)
const binaryTree = {
    value:'F',
    left:{
        value:'C',
        left:{
            value:'A',
        },
        right:{
            value:'D',
            left:{
                value:'B'
            }
        }
    },
    right:{
        value:'E',
        left:{
            value:'H'
        },
        right:{
            value:'G',
            left:{
                value:'M'
            }
        }
    }
};

```

```javascript 1.8
/**
 * 获取最大深度
 */
function maxDepth(tree) {
    if(!tree){
        return 0;
    }
    return 1 + Math.max(maxDepth(tree.left),maxDepth(tree.right))
}
```