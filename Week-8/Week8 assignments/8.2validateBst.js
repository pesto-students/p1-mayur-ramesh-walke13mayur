//creating class for adding nodes
class Node {
    constructor(value,left=null,right=null){
        this.value=value;
        this.left=left;
        this.right =right;
    }
}

//definng function for validation
//pushinng all nodes in a stack result 
function ValidateBST(node) {

    if (node == null) {
        return [];
    }
    const result = [];
    if (node.left !== null) {
        result.push(...ValidateBST(node.left));
    }
    result.push(node.value)
    if (node.right !== null) {
        result.push(...ValidateBST(node.right));
    }

    return result;
}
let node5 = new Node(6);
let node4 = new Node(3);
let node3 = new Node(4, node4, node5);
let node2 = new Node(1);
let node1 = new Node(5, node2, node3);

//example 2
// let node3 = new Node(3);
// let node2 = new Node(1);
// let node1 = new Node(2, node2, node3);

// checking if array is sorted
function IsArraySorted(arr)
{
    n=arr.length;

    if (n == 0 || n == 1)
        return true;

    for (let i = 1; i < n; i++)


        if (arr[i - 1] > arr[i])
            return false;


    return true;
}

console.log(IsArraySorted(ValidateBST( node1)));