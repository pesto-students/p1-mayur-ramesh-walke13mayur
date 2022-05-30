/*Time Complexity: O(n) 
Auxiliary Space: O(n) */


let string = "([]" // input string
let stack = []; // creating empty array

//iterating through each element in string 
for (element of string) {
    //if element in string is opening parenthesis, push the parenthesis in array
    if (element == "{" || element == "(" || element == "[") {
        stack.push(element);

    }
    //if  element in string is closing parenthesis, pop the parenthesis in array
    if (element == "}" || element == ")" || element == "]") {
        stack.pop(element);

    }
}
//is array is empty parenthesis are balanced
if (stack.length == 0)
    console.log(true);
    //is array is not empty parenthesis are unbalanced
else
    console.log(false);