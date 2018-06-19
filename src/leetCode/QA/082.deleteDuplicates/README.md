
## 删除排序链表中的重复元素 II
> 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。       

### 示例 1
> 输入: 1->2->3->3->4->4->5            
> 输出: 1->2->5

### 示例 2
> 输入: 1->1->1->2->3         
> 输出: 2->3

### 链表定义
```javascript 1.8
function ListNode(val) {
    this.val = val;
    this.next = null;
}
```

### 解法
```javascript 1.8
let deleteDuplicates = function (head) {
    let res = new ListNode(-1);
    res.next = head;
    let cur = res;
    while (cur){
        if(!cur.next || !cur.next.next || cur.next.val !== cur.next.next.val){
            cur = cur.next;
        }else{
            while (cur.next && cur.next.next && cur.next.val === cur.next.next.val){
                cur.next = cur.next.next
            }
            cur.next = cur.next.next;
        }
    }
    return res.next;
};
```
