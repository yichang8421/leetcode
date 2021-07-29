class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    next: TreeNode | null;

    constructor(val?: number, left?: TreeNode, right?: TreeNode, next?: TreeNode) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.next = (next === undefined ? null : next);
    }
}

function connectTwoTreeNodes(node1: TreeNode | null, node2: TreeNode | null): TreeNode | null {
    if (!node1 || !node2) return null;

    node1.next = node2;

    connectTwoTreeNodes(node1.left,node1.right);
    connectTwoTreeNodes(node2.left,node2.right);

    connectTwoTreeNodes(node1.right,node2.left);

    return null;
}

function connect(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    connectTwoTreeNodes(root.left, root.right);
    return root;
};