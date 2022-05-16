//creating string
let InputString = "zawsexrdctfvysxrdcSAtfvygbuhnijwordsmoik,po5de46f7gy8hu9jiou$$#S%D$^F&T^GY*HUI";
//setting which character to find in given inputstring
let vowel = 'AEIOUaeiou'

function vowelCount(InputString) {
    //creating new map
    const map = new Map();
    //loopong each vowel present in inputstring
    for (let char of InputString) {
        if (vowel.includes(char)) { // if vowel already has char then increment the value
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else { // if vowel does not have char then then add char in map and value 1
                map.set(char, 1);
            }
        }
    }
    return (map);
}
/* another way to print map */
//const str1 = vowelCount(InputString);
// for (const x of str1.entries()) {
//     console.log(x);
//}
//caling function
const map = vowelCount(InputString);
//creating string to display output and looping through map key and values
let text = "";
map.forEach(function (value, key) {

    text += 'count of vowel ' + key + ' is ' + value + "\n";

}
)
console.log(text);