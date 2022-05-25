/* Time Complexity: O(n)
Space Complexity: O(1) */

//creating class node 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
//creating nodes
let node1 = new Node(2);
let node2 = new Node(4);
let node3 = new Node(7);

//creating linking between nodes
node1.next = node2;
node2.next = node3;
node3.next = node2;                 //making node 2 as next element after node 3

//traversing every node in given linked list.
// modifying element once visited and setting as -1 
//if value -1 is already present then loop is detected
function detectLoop(h) {
    first_node = node1

    while (first_node != null) {
        if (first_node.data == -1) {
            return true;
        }
        else {
            first_node.data = -1;
            first_node = first_node.next;
        }
    }
    return false;
}
console.log(detectLoop(node1));