
## 排序链表
> 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

### 示例1
> 输入: 4->2->1->3        
> 输出: 1->2->3->4

### 示例2
> 输入: -1->5->3->4->0            
> 输出: -1->0->3->4->5


### 链表定义
```javascript 1.8
function ListNode(val) {
   this.val = val;
   this.next = null;
}
```

### 解法
```javascript 1.8
let merge = function (l1,l2) {
    let res = new ListNode(-1);
    let cur = res;
    while (l1 && l2){
        if(l1.val > l2.val){
            cur.next = l2;
            l2 = l2.next;
        }else{
            cur.next = l1;
            l1  = l1.next;
        }
        cur = cur.next;
    }
    if(l1){
        cur.next = l1;
    }
    if(l2){
        cur.next = l2;
    }
    return res.next;
};
let sortList = function (head) {
    if(!head || !head.next){
        return head;
    }
    let fast = head,
        slow = head,
        pre = head;
    while (fast && fast.next){
        pre = slow;
        fast = fast.next.next;
        slow = slow.next;
    }
    pre.next = null;
    return merge(sortList(head),sortList(slow))
};
```