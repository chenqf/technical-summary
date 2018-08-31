
## 合并K个排序链表
> 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。   

### 示例
> 输入: [ 1->4->5, 1->3->4, 2->6 ]
> 输出: 1->1->2->3->4->4->5->6


### 链表定义
```javascript 1.8
function ListNode(val) {
    this.val = val;
    this.next = null;
}
```

### 合并两个链表
```javascript 1.8
let mergeTwoList = function (node1,node2) {
    let node = new ListNode();
    let cur = node;
    while (node1 && node2){
        if(node1.val < node2.val){
            cur.next = node1;
            node1 = node1.next;
        }else{
            cur.next = node2;
            node2 = node2.next;
        }
        cur = cur.next;
    }
    if(node1){
        cur.next = node1;
    }
    if(node2){
        cur.next = node2;
    }
    return node.next;
};
```

### 合并K个链表
```javascript 1.8
let mergeKLists = function(lists) {
    if(!lists.length){
        return [];
    }
    let len = lists.length;
    while (len > 1){
        let i = 0,j = len - 1;
        while (i<j){
            lists[i] = mergeTwoList(lists[i], lists[j]);
            i++;
            j--;
        }
        if(i === j){
            i++;
        }
        len = i;
    }
    return lists[0];
};
```