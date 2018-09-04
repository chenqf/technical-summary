function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);


let mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2){
        return (l1 || l2)
    }
    let result = new ListNode;
    let preNode = result;
    while (l1 || l2){
        let currentNode = new ListNode;
        if(!l2){
            currentNode.val = l1.val;
            l1 = l1.next;
        }else if(!l1){
            currentNode.val = l2.val;
            l2 = l2.next;
        }else{
            if(l1.val < l2.val){
                currentNode.val = l1.val;
                l1 = l1.next;
            }else{
                currentNode.val = l2.val;
                l2 = l2.next;
            }
        }
        preNode.next = currentNode;
        preNode = currentNode;
    }
    return result.next;
};

console.log(mergeTwoLists(l1,l2));