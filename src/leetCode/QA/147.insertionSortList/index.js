



function insertSort(list) {
    for(let i = 1; i<list.length; i++){
        let j = i - 1;
        let temp = list[i];
        while (j >= 0 && list[j] > temp){
            list[j + 1] = list[j];
            j--
        }
        list[j + 1] = temp;
    }
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);


let insertionSortList = function (head) {
   if(!head || !head.next){
       return head;
   }
   let res = new ListNode(-1);
   while (head){
       let next = head.next;
       let cur = res;
       while (cur.next && cur.next.val <= head.val){
           cur = cur.next;
       }

       head.next = cur.next;
       cur.next = head;
       head = next;
   }
   return res.next;
};