//creating 2 empty stack
let stack1 = [];
let stack2 = [];

//implementing push function
function push(element) {
    stack1.push(element);
}
//implementing pop function
function pop() {
    while (stack1.length != 0) {
        stack2.push(stack1.pop())
    }
    //returning top element which needs to be pop
    let ans = stack2.pop();
    while (stack2.length != 0) {
        stack1.push(stack2.pop())
    }
    return ans
}

//defining operations in form of array
let arr = [1, 2, 1, 3, 2, 1, 4, 2]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        push(arr[i + 1])
        i++;
    }
    else if (arr[i] == 2) {
        console.log(pop());
    }
}