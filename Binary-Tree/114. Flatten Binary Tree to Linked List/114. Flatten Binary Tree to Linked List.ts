class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function flatten(root: TreeNode | null): void {
    if(!root) return;
    flatten(root.left);
    flatten(root.right);

    let right:TreeNode | null = root.right;
    root.right = root.left;
    root.left = null;

    let p: TreeNode| null = root;
    while(p.right){
        p = p.right;
    }
    p.right = right;
};