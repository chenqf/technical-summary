// @flow Created by 陈其丰 on 2018/7/25.


// 二叉树结构如下
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

/**
 * 获取最大深度
 */
function maxDepth(tree) {
    if(!tree){
        return 0;
    }
    return 1 + Math.max(maxDepth(tree.left),maxDepth(tree.right))
}
