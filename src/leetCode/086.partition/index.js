// @flow Created by 陈其丰 on 2018/7/26.

function ListNode(val) {
    this.val = val;
    this.next = null;
}


let partition = function(head, x) {
    if(!head){
        return head;
    }
    let cur = head;
    let baseList = [];
    let minList = [];
    while (cur){
        if(cur.val < x){
            minList.push(cur);
        }else{
            baseList.push(cur);
        }
        cur = cur.next;
    }
    Array.prototype.push.apply(minList,baseList);
    for(let i = 0,len = minList.length; i<len; i++){
        if(i === len - 1){
            minList[i].next = null;
        }else{
            minList[i].next = minList[i + 1];
        }
    }
    return minList[0];
};