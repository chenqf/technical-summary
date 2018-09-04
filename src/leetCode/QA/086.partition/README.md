
## 分隔链表
> 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。           
> 你应当保留两个分区中每个节点的初始相对位置。

### 示例:
> 输入: head = 1->4->3->2->5->2, x = 3        
> 输出: 1->2->2->4->3->5

### 链表定义
```javascript 1.8
function ListNode(val) {
   this.val = val;
   this.next = null;
}
```

### 解法
```javascript 1.8
let partition = function(head, x) {
    if(!head){
        return head;
    }
    let cur = head;
    let baseList = [];
    let minList = [];
    while (cur){
        if(cur.val < x){
            minList.push(cur);
        }else{
            baseList.push(cur);
        }
        cur = cur.next;
    }
    Array.prototype.push.apply(minList,baseList);
    for(let i = 0,len = minList.length; i<len; i++){
        if(i === len - 1){
            minList[i].next = null;
        }else{
            minList[i].next = minList[i + 1];
        }
    }
    return minList[0];
};
```