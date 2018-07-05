

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);


var merge = function (l1,l2) {
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

var sortList = function (head) {
    debugger;
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

console.log(sortList(head));