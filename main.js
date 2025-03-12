// 1.1. Функція для знаходження мінімальної довжини серед трьох слів
function findMinLengthOfThreeWords(word1, word2, word3) {
    return Math.min(word1.length, word2.length, word3.length);
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

// 1.2. Функція для отримання масиву непарних чисел
function filterOddElements(arr) {
    return arr.filter(num => num % 2 !== 0);
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

// 1.3. Функція для знаходження довжини найкоротшого слова
function getLengthOfShortestElement(arr) {
    if (arr.length === 0) return 0;
    return Math.min(...arr.map(word => word.length));
}

var output = getLengthOfShortestElement(["one", "two", "three"]);
console.log(output); // --> 3

// 1.4. Функція для об'єднання вкладених масивів
function joinArrayOfArrays(arr) {
    return [].concat(...arr);
}

var output = joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]]);
console.log(output); // --> [1, 4, true, false, "x", "y"]

// 1.5. Функція для знаходження найменшого числа в змішаному масиві
function findSmallestNumberAmongMixedElements(arr) {
    const numbers = arr.filter(el => typeof el === 'number');
    return numbers.length > 0 ? Math.min(...numbers) : 0;
}

var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output); // --> 4

// 1.6. Функція для обчислення суми чисел від 1 до n
function computeSummationToN(n) {
    return n * (n + 1) / 2;
}

var output = computeSummationToN(6);
console.log(output); // --> 21

// 1.7. Функція для конвертації оцінки в ECTS
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

// 1.8. Функція для знаходження найдовшого слова
function getLongestOfThreeWords(word1, word2, word3) {
    return [word1, word2, word3].reduce((longest, current) => current.length > longest.length ? current : longest);
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

// 1.9. Функція для множення без оператора *
function multiply(num1, num2) {
    let result = 0;
    for (let i = 0; i < Math.abs(num2); i++) {
        result += Math.abs(num1);
    }
    return (num1 < 0) !== (num2 < 0) ? -result : result;
}

var output = multiply(4, 7);
console.log(output); // --> 28

// 1.10. Функція для обчислення суми чисел між двома числами
function computeSumBetween(num1, num2) {
    if (num1 >= num2) return 0;
    let sum = 0;
    for (let i = num1; i < num2; i++) {
        sum += i;
    }
    return sum;
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9
