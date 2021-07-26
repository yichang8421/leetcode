/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 let reverse = function (head, tail) {
    let pre = null, next = null;
    while (head != tail) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}

var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let tail = head;

    for (let i = 0; i < 2; i++) {
        if (!tail) return head;
        tail = tail.next;
    }

    let newHead = reverse(head, tail);

    head.next = swapPairs(tail);

    return newHead;
};