
## 环形链表 II
> 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
> 你能否不使用额外空间解决此题？

### 说明
> 不允许修改给定的链表。

### 链表定义
```javascript 1.8
function ListNode(val) {
   this.val = val;
   this.next = null;
}
```

### 解法
```javascript 1.8
let detectCycle = function(head) {
    if(!head || !head.next){
        return null;
    }
    let low = head;
    let fast = head;
    let X = head,Y;
    while (fast){
        if(!fast.next || !fast.next.next){
            return null;
        }
        low = low.next;
        fast = fast.next.next;
        if(low === fast){
            Y = fast;
            break;
        }
    }
    while (true){
        if(X === Y){
            return X;
        }
        X = X.next;
        Y = Y.next;
    }

};
```