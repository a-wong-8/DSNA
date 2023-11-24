function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if (!root) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);

    return root
};

console.log(invertTree([4,2,7,1,3,6,9])); // [4,7,2,9,6,3,1]