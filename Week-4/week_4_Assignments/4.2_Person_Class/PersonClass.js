'use strict';
const Person = function(){};
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age= age;
}
// creating class teacher and method teach
const Teacher = function(){
    this.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
    }
}
Teacher.prototype = new Person();
let him = new Teacher();

him.initialize("teacher1", 39);
him.teach("fundamentals of computer");