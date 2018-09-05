
## 对链表进行插入排序
> 对链表进行插入排序。


### 插入排序算法：
+ 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
+ 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
+ 重复直到所有输入数据插入完为止。

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
let insertionSortList = function (head) {
   if(!head || !head.next){
       return head;
   }
   let res = new ListNode(-1);
   while (head){
       let next = head.next;
       let cur = res;
       while (cur.next && cur.next.val <= head.val){
           cur = cur.next;
       }

       head.next = cur.next;
       cur.next = head;
       head = next;
   }
   return res.next;
};
```