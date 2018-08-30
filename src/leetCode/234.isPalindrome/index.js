
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var head = new ListNode(0);
head.next = new ListNode(0);



let isPalindrome = function (head) {
    if(!head || !head.next){
        return true;
    }
    let slow = head,fast = head;
    let list = [];
    while (fast){
        list.push(slow);
        if(fast.next && fast.next.next){
            fast = fast.next.next;
            slow = slow.next;
        }else{
            //单数
            if(!fast.next){
                list.pop();
            }
            fast = null;
        }
    }
    while (slow && slow.next){
        let pre = list.pop();
        slow = slow.next;
        if(slow.val !== pre.val){
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(head));