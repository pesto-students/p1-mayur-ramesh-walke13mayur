// obj 1
let Name = {
    firstname : "mayur",
    lastName : "walke",
}
// function printFullName
let printFullName = function (hometown, state){
    console.log(this.firstname + " " + this.lastName + " " + hometown + " " + state);
}
// call method.
console.log(printFullName.call(Name, "wardha", "maharashtra")
)

// // obj 2
let name2 = {
    firstname : "abc",
    lastName : "xyz",
}

// function borrowing
console.log(printFullName.call(name2, "kota", "Rajstahn"))

// apply method : in second argument we pass as arraylist
console.log(printFullName.apply(name2, ["kota", "Rajstahn"]))


// bind method
 let printMyName = printFullName.bind(name2, "kota", "Rajstahn")
console.log(printMyName);
