

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;


let removeNthFromEnd = function (head, n) {
    let start = 0;
    let list = [];
    let cur = head;
    while (cur){
        list.push(cur);
        cur = cur.next;
    }
    let len = list.length;
    if(len === n){
        return list[1] || [];
    }
    let deleteIndex = len - n;
    let next = list[deleteIndex + 1];
    let pre = list[deleteIndex - 1];
    pre.next = next;
    return head;
};