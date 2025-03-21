// Завдання 1: Перевірка першого символа на верхній регістр
function upperCase(str) {
    const regexp = /^[A-Z]/;
    if (regexp.test(str)) {
      return "String's starts with uppercase character";
    } else {
      return "String's not starts with uppercase character";
    }
  }
  
  function checkUpperCase() {
    const input = document.getElementById("task1Input").value;
    const result = upperCase(input);
    document.getElementById("task1Result").innerHTML = result;
  }
  
  // Завдання 2: Перевірка рядка на відповідність емейлу
  function checkEmail(email) {
    const regexp = /\S+@\S+\.\S+/;
    return regexp.test(email);
  }
  
  function checkEmailBasic() {
    const input = document.getElementById("task2Input").value;
    const result = checkEmail(input);
    document.getElementById("task2Result").innerHTML = result;
  }
  
  // Завдання 3: Пошук шаблону d + одна чи більше b + d
  function findPattern(str) {
    const regexp = /d(b+)(d)/gi;
    const match = str.match(regexp);
    
    if (!match) return [];
    
    const matches = match[0].match(/d(b+)(d)/i);
    
    if (matches) {
      return [matches[0], matches[1], matches[2]];
    }
    
    return [];
  }
  
  function findDbdPattern() {
    const input = document.getElementById("task3Input").value;
    const result = findPattern(input);
    document.getElementById("task3Result").innerHTML = result.length 
      ? JSON.stringify(result) 
      : "Шаблон не знайдено";
  }
  
  // Завдання 4: Заміна місцями двох підстрічок
  function swapSubstrings(str) {
    return str.replace(/(\S+)\s+(\S+)/, "$2, $1");
  }
  
  function swapWords() {
    const input = document.getElementById("task4Input").value;
    const result = swapSubstrings(input);
    document.getElementById("task4Result").innerHTML = result;
  }
  
  // Завдання 5: Валідація номера банківської карти
  function validateCardNumber(cardNumber) {
    const regexp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regexp.test(cardNumber);
  }
  
  function validateCard() {
    const input = document.getElementById("task5Input").value;
    const result = validateCardNumber(input);
    document.getElementById("task5Result").innerHTML = result 
      ? "Номер карти валідний" 
      : "Номер карти невалідний";
  }
  
  // Завдання 6: Розширена перевірка емейлу
  function checkEmailExtended(email) {
    const regexp = /^[A-Za-z0-9][A-Za-z0-9_]*([A-Za-z0-9]+-[A-Za-z0-9]+)*[A-Za-z0-9_]*@[A-Za-z0-9]+\.[A-Za-z]+$/;
    
    if (regexp.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
  }
  
  function checkEmailExtendedUi() {
    const input = document.getElementById("task6Input").value;
    const result = checkEmailExtended(input);
    document.getElementById("task6Result").innerHTML = result;
  }
  
  // Завдання 7: Перевірка логіна
function checkLogin(login) {
    // Перевірка логіна на валідність (від 2 до 10 символів, тільки букви та цифри, перший символ - не цифра)
    const loginRegexp = /^[A-Za-z][A-Za-z0-9\.]{1,9}$/;
    const isValid = loginRegexp.test(login);

    // Знаходження всіх чисел у рядку, включаючи числа з плаваючою комою
    const numbersRegexp = /\d*\.\d+|\d+/g;
    const numbers = login.match(numbersRegexp);

    return {
      isValid: isValid,
      numbers: numbers || []
    };
}

function checkLoginUi() {
    const input = document.getElementById("task7Input").value;
    const result = checkLogin(input);

    // Виведення результату
    document.getElementById("task7Result").innerHTML = result.isValid + "<br>" +
      (result.numbers.length > 0 ? result.numbers.join(", ") : "");
}

