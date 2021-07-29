class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function reverseLN(head: ListNode | null): ListNode {
    let pre = null, curr = head, next = null;
    while (curr) {
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre!;
}

function isPalindrome(head: ListNode | null): boolean {
    let fast = head, slow = head;
    let left = head, right = null;
    let p = head, q = null;      // p、q用于还原链表

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow!.next;
    }
    if (fast) {
        slow = slow!.next;
    }

    right = reverseLN(slow);

    q = right;

    if (p && p.next != slow) {
        p = p.next;
    }

    while (right) {
        if (left!.val !== right.val) {
            // 还原链表
            p!.next = reverseLN(q);
            return false;
        }

        left = left!.next;
        right = right.next;
    }

    // 还原链表
    p!.next = reverseLN(q);

    return true;
};