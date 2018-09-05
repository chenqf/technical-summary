
### 数组的插入排序
```javascript 1.8
function insertSort(list = []) {
    for(let i = 1 , len = list.length; i < len; i++){
        let j = i - 1;
        let temp = list[ i ];
        while (j >= 0 && list[ j ] > temp){
            list[j + 1] = list[ j ];
            j = j - 1;
        }
        list[j + 1] = temp;
    }
    return list;
}
```

### 链表的插入排序
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

