/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function reverse(head: ListNode | null, tail: ListNode | null): ListNode | null {
    let pre = null, next = null;
    while (head != tail) {
        next = head!.next;
        head!.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let tail = head;

    for (let i = 0; i < 2; i++) {
        if (!tail) return head;
        tail = tail.next!;
    }

    let newHead = reverse(head, tail);

    head.next = swapPairs(tail);

    return newHead;
};