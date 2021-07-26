/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let stack = [];
    if (!head || !head.next) return head;

    let localk = k;
    let dummy = new ListNode(0), pre = dummy, curr = head;

    while (localk > 0 && curr) {
        stack.push(curr);
        curr = curr.next;
        localk--;
    }

    if (localk > 0) return head;

    while (stack.length > 0) {
        pre.next = stack.pop();
        pre = pre.next;
    }

    pre.next = reverseKGroup(curr, k);

    return dummy.next;
};