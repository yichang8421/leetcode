class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let pre: ListNode = null, pre2: ListNode = null;
    let curr: ListNode = head, curr2: ListNode = null;
    let next: ListNode = null;
    let i: number = 0;

    for (i = 1; i < left; i++) {
        pre = curr;
        curr = curr.next;
    }

    pre2 = pre;
    curr2 = curr;

    for (i = left; i <= right; i++) {
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }

    curr2.next = curr;

    if (!pre2) {
        return pre;
    } else {
        pre2.next = pre;
        return head;
    }
};