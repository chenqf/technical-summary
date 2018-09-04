
## 删除链表的倒数第N个节点
> 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。


### 示例 1
> 给定一个链表: 1->2->3->4->5, 和 n = 2.       
> 当删除了倒数第二个节点后，链表变为 1->2->3->5.     

### 示例 2
> 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]      
> 输出: [9,4]


### 说明
+ 给定的 n 保证是有效的。
   

### 链表对象定义如下
```javascript 1.8
function ListNode(val) {
    this.val = val;
    this.next = null;
}
```

### 解法
```javascript 1.8
let removeNthFromEnd = function (head, n) {
    let start = 0;
    let list = [];
    let cur = head;
    while (cur){
        list.push(cur);
        cur = cur.next;
    }
    let len = list.length;
    if(len === n){
        return list[1] || [];
    }
    let deleteIndex = len - n;
    let next = list[deleteIndex + 1];
    let pre = list[deleteIndex - 1];
    pre.next = next;
    return head;
};
```
