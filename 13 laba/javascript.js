// Функція для демонстрації роботи з вікном
function demonstrateWindowOperations() {
    // 1) Створення нового вікна розміром 300х300 пікселів
    const newWindow = window.open('', '', 'width=300,height=300');
    
    // Додаємо деякий вміст у нове вікно, щоб бачити його
    newWindow.document.write('<h3>Це нове вікно</h3>');
    newWindow.document.write('<p>Розмір 300x300 пікселів</p>');
    newWindow.document.write('<p>Спостерігайте за змінами...</p>');
    newWindow.document.close();
    
    // 2) Змінюємо розміри вікна на 500х500 пікселів через 2 секунди
    setTimeout(function() {
      newWindow.resizeTo(500, 500);
      newWindow.document.write('<p>Розмір змінено на 500x500 пікселів</p>');
    }, 2000);
    
    // 3) Переміщення вікна в точку з координатами (200, 200) через 4 секунди
    setTimeout(function() {
      newWindow.moveTo(200, 200);
      newWindow.document.write('<p>Вікно переміщено в точку (200, 200)</p>');
    }, 4000);
    
    // 4) Закриття вікна через 6 секунд
    setTimeout(function() {
      newWindow.close();
    }, 6000);
  }