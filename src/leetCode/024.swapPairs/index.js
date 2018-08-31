

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);


let swapPairs = function (head) {
    let node = new ListNode(-1);
    let cur = node;
    while (head && head.next){
        let one = head;
        let two = head.next;
        let three = head.next.next;
        cur.next = two;
        cur.next.next = one;
        cur = cur.next.next;
        head = three;
    }
    cur.next = head;
    return node.next;
};

console.log(swapPairs(head));