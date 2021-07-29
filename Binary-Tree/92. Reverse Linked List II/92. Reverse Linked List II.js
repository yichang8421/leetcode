/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let pre = null;
    let curr = head;
    let next = null;

    for(let i =1;i<left;i++){
        pre=curr;
        curr=curr.next;
    }

    let pre2 = pre;
    let curr2 = curr;

    for(let i=left;i<=right;i++){
        next = curr.next;
        curr.next=pre;
        pre=curr;
        curr=next;
    }

    curr2.next = curr;

    if(!pre2){
        return pre; 
    }else{
        pre2.next = pre;
        return head;
    }
};