// 1.1. Функція findMinLengthOfThreeWords, яка визначає мінімальну довжину з трьох слів
function findMinLengthOfThreeWords(word1, word2, word3) {
    var minLength = Math.min(word1.length, word2.length, word3.length);
    return minLength;
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

// 1.2. Функція filterOddElements, яка повертає масив з непарними елементами
function filterOddElements(arr) {
    return arr.filter(num => num % 2 !== 0);
}
var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

// 1.3. Функція getLengthOfShortestElement, яка повертає довжину найкоротшого слова
function getLengthOfShortestElement(arr) {
    let minLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < minLength) {
            minLength = arr[i].length;
        }
    }
    return minLength;
}
var output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output); // --> 3

// 1.4. Функція joinArrayOfArrays, яка об'єднує всі елементи вкладених масивів
function joinArrayOfArrays(arr) {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}
var output = joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]]);
console.log(output); // --> [1, 4, true, false, "x", "y"]

// 1.5. Функція findSmallestNumberAmongMixedElements, яка повертає найменше число з масиву змішаних елементів
function findSmallestNumberAmongMixedElements(arr) {
    var numbers = arr.filter(el => typeof el === 'number');
    if (numbers.length === 0) {
        return 0;
    }
    return Math.min(...numbers);
}
var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output); // --> 4

// 1.6. Функція computeSummationToN, яка обчислює суму чисел від 0 до заданого числа
function computeSummationToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
var output = computeSummationToN(6);
console.log(output); // --> 21

// 1.7. Функція convertScoreToGrade, яка повертає рейтинг за шкалою ECTS
function convertScoreToGrade(score) {
    if (score > 100 || score < 0) return 'INVALID SCORE';
    if (score >= 90) return 'A';
    if (score >= 82) return 'B';
    if (score >= 75) return 'C';
    if (score >= 69) return 'D';
    if (score >= 60) return 'E';
    if (score >= 35) return 'Fx';
    return 'F';
}
var output = convertScoreToGrade(91);
console.log(output); // --> 'A'

// 1.8. Функція getLongestOfThreeWords, яка повертає найдовше слово
function getLongestOfThreeWords(word1, word2, word3) {
    return [word1, word2, word3].reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    });
}
var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

// 1.9. Функція multiply, яка повертає добуток чисел без використання оператора *
function multiply(num1, num2) {
    let result = 0;
    for (let i = 0; i < Math.abs(num2); i++) {
        result += Math.abs(num1);
    }
    return num2 < 0 ? -result : result;
}
var output = multiply(4, 7);
console.log(output); // --> 28

// 1.10. Функція computeSumBetween, яка повертає суму чисел між двома цілими числами
function computeSumBetween(num1, num2) {
    if (num1 > num2) return 0;
    let sum = 0;
    for (let i = num1 + 1; i < num2; i++) {
        sum += i;
    }
    return sum;
}
var output = computeSumBetween(2, 5);
console.log(output); // --> 6
