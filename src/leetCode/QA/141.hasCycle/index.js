// @flow Created by 陈其丰 on 2018/7/26.

function ListNode(val) {
    this.val = val;
    this.next = null;
}


let hasCycle = function (head) {
    if(!head || !head.next){
        return false;
    }
    let slow = head;
    let fast = head;
    while (fast){
        if(!fast.next || !fast.next.next){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
};