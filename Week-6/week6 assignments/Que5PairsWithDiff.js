//declaring array and vaalue which difference need to check if any
let array = [5, 10, 3, 2, 50, 80]
let diff = 78;
let output;
//looping through all elements in array and finding if difference exists
for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] - array[j] == diff || array[i] - array[j] == -Math.abs(diff)) {
            output = 1; //setting output to 1 if difference is found
        }
        else {
            output = 0   //setting output to 0 if difference is not found
        }
        //breaking the looping to avoid any further modification of output
        if (output == 1)
            break;
    }
    if (output == 1)
        break;
}
if (output == 1)
    console.log(1)
else
    console.log(0)