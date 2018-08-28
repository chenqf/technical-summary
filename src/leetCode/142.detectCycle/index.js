// @flow Created by 陈其丰 on 2018/7/26.

function ListNode(val) {
    this.val = val;
    this.next = null;
}


let detectCycle = function(head) {
    if(!head || !head.next){
        return null;
    }
    let low = head;
    let fast = head;
    let X = head,Y;
    while (fast){
        if(!fast.next || !fast.next.next){
            return null;
        }
        low = low.next;
        fast = fast.next.next;
        if(low === fast){
            Y = fast;
            break;
        }
    }
    while (true){
        if(X === Y){
            return X;
        }
        X = X.next;
        Y = Y.next;
    }

};