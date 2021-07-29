class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return head;
    if (!head.next) return head;
    let rest: ListNode | null= reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
};