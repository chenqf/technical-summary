
## 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。
> 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
>> 输出：7 -> 0 -> 8
>>> 原因：342 + 465 = 807

### 链表定义如下
```javascript 1.8
function ListNode(val) {
    this.val = val;
    this.next = null;
}
```
### 输入参数的封装
```javascript 1.8
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
```

### 实现方式
```javascript 1.8
let addTwoNumbers = function (l1,l2) {
    let result = new ListNode(0),
        node = result;
    while(l1 || l2){
        let r = node.val,
            i = (l1 && l1.val) || 0,
            j = (l2 && l2.val) || 0,
            sum = r + i + j,
            m,n;
        if(sum >= 10){
            m = 1;
            n = sum - 10;
        }else{
            m = 0;
            n = sum;
        }
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        node.val = n;
        if(m || l1 || l2){
            node.next = new ListNode(m);
            node = node.next
        }
    }
    return result;
};
```

### 验证
```javascript 1.8
console.log(addTwoNumbers(l1,l2))
```