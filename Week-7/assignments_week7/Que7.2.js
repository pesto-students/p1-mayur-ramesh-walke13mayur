/* Time Complexity: O(n)
Space Complexity: O(n) */

//creating class node 
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
//creating node
let node1 = new Node(2);
let node2 = new Node(4);
let node3 = new Node(7);
let node4 = new Node(8);
let node5 = new Node(9);
//creating linking between nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

//displaying link list before rotate
let a = []
let BeforeRotate = node1
while (BeforeRotate) {
	a.push(BeforeRotate.data)
	BeforeRotate = BeforeRotate.next;

}
console.log(a);
//reset array
a.length = 0;
//set value of k  
//assuming value of k is less than length of linked list
k = 3;
//rotating list 
head = node1
var current = head;
while (current.next) // traversing till end of linked list
	current = current.next;
current.next = head;
current = head;
let i = 0;

while (i < k - 1) {
	current = current.next;
	i++;
}
head = current.next;
current.next = null;

//displaying link list before rotate
while (head) {
	a.push(head.data)
	head = head.next;
}
console.log(a)