//creating class for adding node
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
//function to traverse the tree
//pushing the node in result
function BTLevelTraversal(node) {

    if (node == null) {
        return [];
    }
    const result = []; 

    result.push(node.value)

    if (node.left !== null) {
        result.push(...BTLevelTraversal(node.left));
    }

    if (node.right !== null) {
        result.push(...BTLevelTraversal(node.right));
    }

    return result;
}

//creating node and tree
let node5 = new Node(7);
let node4 = new Node(15);
let node3 = new Node(20, node4, node5);
let node2 = new Node(9);
let node1 = new Node(3, node2, node3);

console.log(BTLevelTraversal(node1));