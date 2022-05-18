//creating object mathOperations and function sum diff product
const mathOperations = {
    sum: function (a, b) {
        return a + b;
    },

    diff: function (a, b) {
        return a - b;
    },
    product: function (a, b) {
        return a * b
    }
}
//exporting module mathoperations
module.exports = mathOperations