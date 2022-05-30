//declaring prices and profit
let prices = [7, 1, 5, 3, 6, 4]
let profit = 0;

//looping through each element in array and finding max profit
for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] > prices[i]) {
            if (prices[j] - prices[i] > profit)
                profit = prices[j] - prices[i];
        }

    }
}
console.log(profit)