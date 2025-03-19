var a = "background-color: #00ffff; color: #ff00ff;";
a += "font-size: 24pt; font-family: 'Times New Roman';";
var naim = 'Мережа магазинів "ВСЕ ДЛЯ ДОМУ"';
var da = new Date();
var d = da.getDate() + "." + (da.getMonth() + 1) + "." + da.getFullYear();
document.write('<p align="center" style="' + a + '">' + naim + '</p>');
document.write('<p>Сьогодні: ' + d + '</p>');
