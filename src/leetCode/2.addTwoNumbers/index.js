// @flow Created by 陈其丰 on 2018/7/26.
/**
 * 链表定义如下
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);



let addTwoNumbers = function (l1,l2) {
    let result = new ListNode(0),
        node = result;
    while(l1 || l2){
        let r = node.val,
            i = (l1 && l1.val) || 0,
            j = (l2 && l2.val) || 0,
            sum = r + i + j,
            m,n;
        if(sum >= 10){
            m = 1;
            n = sum - 10;
        }else{
            m = 0;
            n = sum;
        }
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        node.val = n;
        if(m || l1 || l2){
            node.next = new ListNode(m);
            node = node.next
        }
    }
    return result;
};

addTwoNumbers(l1,l2)

