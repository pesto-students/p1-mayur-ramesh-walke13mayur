const array =                       //declaring array
    [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
    ]

//creating function to print spiral array
function SpiralArray(array) {
    //assigning base values
    let top = 0, bottom = array.length - 1, left = 0, right = array[0].length - 1, direction = 0, i, ResultantArray = [];
    //looping through each element in array and incrementing base values as per condition
    while (top <= bottom && left <= right) {
        
        if (direction == 0) {
            for (i = left; i <= right; i++)
                ResultantArray.push(array[top][i]);
            top++;
        }
        else if (direction == 1) {
            for (i = top; i <= bottom; i++)
                ResultantArray.push(array[i][right]);
            right--;
        }
        else if (direction == 2) {
            for (i = right; i >= left; i--)
                ResultantArray.push(array[bottom][i]);
            bottom--;
        }
        else if (direction == 3) {
            for (i = bottom; i >= top; i--)
                ResultantArray.push(array[i][left]);
            left++;
        }
        direction = (direction + 1) % 4;    //taking remainder and assigning it to direction for next loop      
    }
    return ResultantArray;
}
console.log(SpiralArray(array))