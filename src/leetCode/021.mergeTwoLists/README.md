
## 合并两个有序链表
> 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

### 示例
> 输入：1->2->4, 1->3->4   
> 输出：1->1->2->3->4->4

### 链表定义如下
```javascript 1.8
function ListNode(val) {
    this.val = val;
    this.next = null;
}
```
### 输入参数的封装
```javascript 1.8
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
```

### 实现方式
```javascript 1.8
let mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2){
        return (l1 || l2)
    }
    let result = new ListNode;
    let preNode = result;
    while (l1 || l2){
        let currentNode = new ListNode;
        if(!l2){
            currentNode.val = l1.val;
            l1 = l1.next;
        }else if(!l1){
            currentNode.val = l2.val;
            l2 = l2.next;
        }else{
            if(l1.val < l2.val){
                currentNode.val = l1.val;
                l1 = l1.next;
            }else{
                currentNode.val = l2.val;
                l2 = l2.next;
            }
        }
        preNode.next = currentNode;
        preNode = currentNode;
    }
    return result.next;
};
```