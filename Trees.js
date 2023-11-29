function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function arrayToTree(arr, i) {
    if (i >= arr.length || arr[i] === null) {
        return null;
    }

    const root = new TreeNode(arr[i]);
    root.left = arrayToTree(arr, 2 * i + 1);
    root.right = arrayToTree(arr, 2 * i + 2);

    return root;
}

var invertTree = function(root) {
    if (!root) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);

    return root
};

// console.log(invertTree([4,2,7,1,3,6,9])); // [4,7,2,9,6,3,1]
const root = arrayToTree([4,2,7,1,3,6,9], 0);

console.log(invertTree(root)); // [4,7,2,9,6,3,1]


var maxDepth = function(root) {
    if (!root) return null;
    
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    // console.log(`left ${left}`)

    return Math.max(left, right) + 1;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: 3