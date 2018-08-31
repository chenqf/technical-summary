
## 两两交换链表中的节点
> 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。 

### 示例
> 给定 1->2->3->4, 你应该返回 2->1->4->3.

### 说明
+ 你的算法只能使用常数的额外空间。
+ 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。


### 链表定义
```javascript 1.8
function ListNode(val) {
    this.val = val;
    this.next = null;
}
```

### 解法
```javascript 1.8
let swapPairs = function (head) {
    let node = new ListNode(-1);
    let cur = node;
    while (head && head.next){
        let one = head;
        let two = head.next;
        let three = head.next.next;
        cur.next = two;
        cur.next.next = one;
        cur = cur.next.next;
        head = three;
    }
    cur.next = head;
    return node.next;
};
```