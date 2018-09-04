
function ListNode(val) {
    this.val = val;
    this.next = null;
}


var a = new ListNode(0);
var b = new ListNode(1);
var c = new ListNode(2);
// var d = new ListNode(3);
// var e = new ListNode(4);
// var f = new ListNode(5);
a.next = b;
b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
var head = a;


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


console.log(rotateRight(head,4));