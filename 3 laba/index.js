// Функція для отримання властивості об'єкта
function getProperty(obj, key) {
    return obj[key];
  }
  
  function getPropertyDemo() {
    var obj = { key: 'value' };
    var result = getProperty(obj, 'key');
    document.getElementById("output").innerText = result; // Виведення результату на сторінку
  }
  
  // Функція для додавання властивості в об'єкт
  function addProperty(obj, key) {
    obj[key] = true;
    return obj[key];
  }
  
  function addPropertyDemo() {
    var myObj = {};
    addProperty(myObj, "myProperty");
    document.getElementById("output").innerText = myObj.myProperty; // Виведення результату на сторінку
  }
  
  // Функція для видалення властивості об'єкта
  function removeProperty(obj, key) {
    delete obj[key];
  }
  
  function removePropertyDemo() {
    var obj = { name: 'Sam', age: 20 };
    removeProperty(obj, 'name');
    document.getElementById("output").innerText = obj.name; // Виведення результату на сторінку
  }
  
  // Функція для об'єднання імені та прізвища
  function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  
  function getFullNameDemo() {
    var result = getFullName('Joe', 'Smith');
    document.getElementById("output").innerText = result; // Виведення результату на сторінку
  }
  
  // Функція для визначення кількості символів у слові
  function getLengthOfWord(word) {
    return word.length;
  }
  
  function getLengthOfWordDemo() {
    var result = getLengthOfWord('some');
    document.getElementById("output").innerText = result; // Виведення результату на сторінку
  }
  
  // Функція для визначення кількості символів у двох словах
  function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
  }
  
  function getLengthOfTwoWordsDemo() {
    var result = getLengthOfTwoWords('some', 'words');
    document.getElementById("output").innerText = result; // Виведення результату на сторінку
  }
  
  // Функція для перевірки, чи більше перше число за друге
  function isGreaterThan(num1, num2) {
    return num1 > num2;
  }
  
  function isGreaterThanDemo() {
    var result = isGreaterThan(11, 10);
    document.getElementById("output").innerText = result; // Виведення результату на сторінку
  }
  
  // Функція для перевірки, чи є число парним
  function isEven(num) {
    return num % 2 === 0;
  }
  
  function isEvenDemo() {
    var result = isEven(11);
    document.getElementById("output").innerText = result; // Виведення результату на сторінку
  }
  
  // Функція для перевірки, чи мають два слова однакову кількість літер
  function isSameLength(word1, word2) {
    return word1.length === word2.length;
  }
  
  function isSameLengthDemo() {
    var result = isSameLength('words', 'super');
    document.getElementById("output").innerText = result; // Виведення результату на сторінку
  }
  
  // Функція для перевірки двох умов: чи є число парним і більше за десять
  function isEvenAndGreaterThanTen(num) {
    return num % 2 === 0 && num > 10;
  }
  
  function isEvenAndGreaterThanTenDemo() {
    var result = isEvenAndGreaterThanTen(13);
    document.getElementById("output").innerText = result; // Виведення результату на сторінку
  }
  
  // Функція для обчислення площі трикутника
  function computeAreaOfATriangle(base, height) {
    return (base * height) / 2;
  }
  
  function computeAreaOfATriangleDemo() {
    var result = computeAreaOfATriangle(4, 6);
    document.getElementById("output").innerText = result; // Виведення результату на сторінку
  }
  