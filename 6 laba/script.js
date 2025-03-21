window.onload = function() {
    // Завдання 1: Виведення поточного часу та дати
    var now = new Date();
    document.write("Час: " + now.getHours() + ":" + (now.getMinutes() < 10 ? "0" : "") + now.getMinutes() + "<br>");
    document.write("Дата: " + (now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear() + "<br>");

    // Завдання 2: Працюючий годинник з датою
    var timeStr, dateStr;
    function clock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        
        timeStr = "" + hours;
        timeStr += (minutes < 10 ? ":0" : ":") + minutes;
        timeStr += (seconds < 10 ? ":0" : ":") + seconds;
        document.clock.time.value = timeStr;
        
        var date = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
        
        dateStr = "" + month;
        dateStr += (date < 10 ? "/0" : "/") + date;
        dateStr += "/" + year;
        document.clock.date.value = dateStr;
        
        setTimeout(clock, 1000);
    }

    // Завдання 3: Використання масивів
    var myArray = new Array();
    myArray[0] = "перший елемент";
    myArray[1] = "другий елемент";
    myArray[2] = "третій елемент";

    document.write("<h2>Масив в JavaScript:</h2>");
    for (var i = 0; i < 3; i++) {
        document.write(myArray[i] + "<br>");
    }

    // Ініціалізація годинника
    clock();
};
