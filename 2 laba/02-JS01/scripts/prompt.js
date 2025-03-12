//----- prompt.js -----
var myTxt = document.querySelector('h1.n2');
var myFont = document.querySelectorAll('.myclass');
for (var i = 0; i < myFont.length; i++) {
    myFont[i].style.fontSize = '35px';
}
myTxt.innerHTML = 'Привіт, cтуденте!';
var person = prompt('Яке у вас улюблене місто?');
if (person != null) {
    myTxt.innerHTML = "О, " + person + " — чудове місто! Я мрію там побувати!" + "<br>" + " ";
}
myTxt.style.color = 'blue';