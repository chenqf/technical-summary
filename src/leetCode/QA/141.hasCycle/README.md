
## 环形链表
> 给定一个链表，判断链表中是否有环。
> 你能否不使用额外空间解决此题？


### 链表定义
```javascript 1.8
function ListNode(val) {
   this.val = val;
   this.next = null;
}
```

### 解法
```javascript 1.8
let hasCycle = function (head) {
    if(!head || !head.next){
        return false;
    }
    let slow = head;
    let fast = head;
    while (fast){
        if(!fast.next || !fast.next.next){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
};
```