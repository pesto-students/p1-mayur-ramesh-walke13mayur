//declaring array 
var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

//declaringg two variable for subsequence
let CurrentBest = array[0];
let OverallBest = array[0];

//looping through array and checking if sum of OverallBest is greater than currrent best or not
for (let i = 1; i < array.length; i++) {
    if (CurrentBest >= 0) {
        CurrentBest = CurrentBest + array[i];
    }
    else {
        CurrentBest = array[i];
    }
    if (CurrentBest > OverallBest) {   //if CurrentBest is greater assigning OverallBest as cuurentbest
        OverallBest = CurrentBest;
    }


}
console.log(OverallBest)