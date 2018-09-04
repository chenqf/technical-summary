
## 旋转链表
> 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

### 示例 1
> 输入: 1->2->3->4->5->NULL, k = 2         
> 输出: 4->5->1->2->3->NULL       
> 解释: 
>> 向右旋转 1 步: 5->1->2->3->4->NULL    
>> 向右旋转 2 步: 4->5->1->2->3->NULL

### 示例 2
> 输入: 0->1->2->NULL, k = 4      
> 输出: 2->0->1->NULL     
> 解释: 
>> 向右旋转 1 步: 2->0->1->NULL          
>> 向右旋转 2 步: 1->2->0->NULL          
>> 向右旋转 3 步: 0->1->2->NULL          
>> 向右旋转 4 步: 2->0->1->NULL          

### 链表定义
```javascript 1.8
function ListNode(val) {
    this.val = val;
    this.next = null;
}
```

### 解法
```javascript 1.8
var rotateRight = function(head, k) {
    let cur = head;
    let n = 0;
    let res = head;
    while (cur){
        n = n + 1;
        if(!cur.next){
            cur.next = head;
            cur = null;
        }else{
            cur = cur.next;
        }
    }
    k = k % n;
    let c = head;
    for(let i = 0; i<n; i++){
        if(i === n - k - 1){
            res = c.next;
            c.next = null;
            break;
        }
        c = c.next;
    }
    return res;
};
```
