/* Time Complexity: O(n) 
Space Complexity: O(1) */

//creating class for new node
class Node {
	constructor(data){
		this.data=data;
		this.next=null;
	}
}

//defining function reverse
function ReverseLinkedList(node) {
	var previous = null;
	var current = node;
	var next = null;
	while (current) {
		next = current.next;
		current.next = previous;
		previous = current;
		current = next;
	}
	node = previous;
	return node;
}
//creating nodes
let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(7);
let node4 = new Node(8);
//creating links between nodes
node1.next = node2;
node2.next=node3;
node3.next=node4;
//creating empty array just for displaying the values
let array=[];
let BeforeReverse = node1;
console.log("Linked List before reversing")
while(BeforeReverse){
	array.push(BeforeReverse.data); // adding nodes to array for displaying
	BeforeReverse=BeforeReverse.next;

}
console.log(array)

array.length=0;
let AfterReverse = ReverseLinkedList(node1);

console.log("Linked List after reversing")

while(AfterReverse){
	array.push(AfterReverse.data);
	AfterReverse=AfterReverse.next;

}

console.log(array)