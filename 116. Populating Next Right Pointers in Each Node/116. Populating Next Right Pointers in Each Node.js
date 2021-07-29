/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
let connectTwoNodes = function(node1, node2){
    if(!node1 || !node2) return null;

    node1.next = node2;

    connectTwoNodes(node1.left,node1.right);
    connectTwoNodes(node2.left,node2.right);

    connectTwoNodes(node1.right,node2.left);
}

var connect = function(root) {
    if(!root) return null;

    connectTwoNodes(root.left,root.right);

    return root;
};