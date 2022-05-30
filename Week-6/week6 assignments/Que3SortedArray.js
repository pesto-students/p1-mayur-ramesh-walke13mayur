//declaring array
Array = [0, 2, 1, 2, 0]
ArrayFor0 = [];

//looping through each element in array
for (let i = 0; i < Array.length; i++) {
    if (Array[i] == 0) {       //if 0 is encounter it is added in ArrayFor0 array
        ArrayFor0.push(Array[i]);
    }
}
for (let i = 0; i < Array.length; i++) {
    if (Array[i] == 1) {       //if 1 is encounter it is added in ArrayFor1 array
        ArrayFor0.push(Array[i]);
    }
}
for (let i = 0; i < Array.length; i++) {
    if (Array[i] == 2) {   //if 2 is encounter it is added in ArrayFor2 array
        ArrayFor0.push(Array[i]);
    }
}
console.log(ArrayFor0)