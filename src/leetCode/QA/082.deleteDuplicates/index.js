function ListNode(val) {
    this.val = val;
    this.next = null;
}

var head = new ListNode(1);
head.next = new ListNode(1);


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

console.log(deleteDuplicates(head));
