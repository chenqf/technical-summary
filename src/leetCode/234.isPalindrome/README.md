
## 回文链表
> 请判断一个链表是否为回文链表。

### 示例 1
> 输入: 1->2          
> 输出: false     

### 示例 2
> 输入: 1->2->2->1        
> 输出: true

### 链表定义
```javascript 1.8
function ListNode(val) {
  this.val = val;
  this.next = null;
}
```

### 思路
> 使用快慢指针确定中点

### 解法
```javascript 1.8
let isPalindrome = function (head) {
    if(!head || !head.next){
        return true;
    }
    let slow = head,fast = head;
    let list = [];
    while (fast){
        list.push(slow);
        if(fast.next && fast.next.next){
            fast = fast.next.next;
            slow = slow.next;
        }else{
            //单数
            if(!fast.next){
                list.pop();
            }
            fast = null;
        }
    }
    while (slow && slow.next){
        let pre = list.pop();
        slow = slow.next;
        if(slow.val !== pre.val){
            return false;
        }
    }
    return true;
};
```