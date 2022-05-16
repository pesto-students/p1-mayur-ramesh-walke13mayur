//declaring array and target
let S = [-1, 2, 1, -4]
let b = [];
let target = 1;

//looping through array to find the sum for three consecutive numbers and pushing them in array b
for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j < S.length; j++) {
        for (let k = j + 1; k < S.length; k++) {
            let n = S[i] + S[j] + S[k]
            b.push(n)
        }
    }
}
//finding value closet to target in array b
var ClosestValue = b[0];
var difference = Math.abs(target - ClosestValue);
for (var val = 0; val < b.length; val++) {
    var NewDifference = Math.abs(target - b[val]);
    if (NewDifference < difference) {
        difference = NewDifference;
        ClosestValue = b[val];
    }
}
console.log(ClosestValue)