// 1.1 Обчислення площі прямокутника
function computeAreaOfARectangle(length, width) {
    return length * width;
}
console.log(computeAreaOfARectangle(4, 8)); // --> 32

// 1.2 Обчислення площі круга
function computeAreaOfACircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}
console.log(computeAreaOfACircle(4)); // --> 50.26548245743669

// 1.3 Піднесення числа до степеня
function computePower(base, exponent) {
    return Math.pow(base, exponent);
}
console.log(computePower(2, 3)); // --> 8

// 1.4 Обчислення квадратного кореня
function computeSquareRoot(number) {
    return Math.sqrt(number);
}
console.log(computeSquareRoot(9)); // --> 3

// 1.5 Обчислення загальної кількості букв у трьох словах
function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length + word2.length + word3.length;
}
console.log(getLengthOfThreeWords("some", "other", "words")); // --> 14

// 1.6 Об’єднання двох масивів
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(joinArrays([1, 2], [3, 4])); // --> [1, 2, 3, 4]

// 1.7 Добуток усіх елементів у масиві за ключем об’єкта
function getProductOfAllElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
        return 0;
    }
    return obj[key].reduce((acc, val) => acc * val, 1);
}
var obj = { key: [1, 2, 3, 4] };
console.log(getProductOfAllElementsAtProperty(obj, "key")); // --> 24

// 1.8 Сума цифр числа
function sumDigits(num) {
    let str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') continue;
        sum += parseInt(str[i]);
    }
    return num < 0 ? -sum + 2 * parseInt(str[1]) : sum;
}
console.log(sumDigits(1148)); // --> 14
console.log(sumDigits(-316)); // --> 4

// 1.9 Пошук найкоротшого слова у масиві
function findShortestWordAmongMixedElements(arr) {
    let words = arr.filter(el => typeof el === 'string');
    if (words.length === 0) return "";
    return words.reduce((shortest, word) => word.length < shortest.length ? word : shortest);
}
console.log(findShortestWordAmongMixedElements([4, "two", 2, "three"])); // --> "two"

// 1.10 Пошук найменшого числа у масиві
function findSmallestNumberAmongMixedElements(arr) {
    let numbers = arr.filter(el => typeof el === 'number');
    if (numbers.length === 0) return "";
    return Math.min(...numbers);
}
console.log(findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"])); // --> 4