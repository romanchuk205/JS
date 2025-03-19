let flag = 0;

function rodEl(evt) {
  let e = evt || window.event;
  let elem = e.target || e.srcElement;
  let id1 = elem.id;
  let z1 = document.getElementById(id1);

  switch (id1) {
    case "k1":
      let z = z1.style.backgroundColor;
      z = (z !== "red") ? "red" : "green";
      z1.style.backgroundColor = z;
      break;
    case "k2":
      z = z1.style.backgroundColor;
      z = (z !== 'rgb(0, 255, 255)') ? 'rgb(0, 255, 255)' : 'rgb(0, 255, 0)';
      z1.style.backgroundColor = z;
      break;
    case "B":
      z = z1.style.backgroundColor;
      z = (z !== 'rgb(190, 190, 190)') ? 'rgb(190, 190, 190)' : 'rgb(0, 190, 190)';
      z1.style.backgroundColor = z;
      break;
    case "HH":
      if (flag === 0) {
        document.getElementById(id1).style.color = 'rgb(170,0,170)';
        flag = 1;
      } else {
        document.getElementById(id1).style.color = 'rgb(0,255,170)';
        flag = 0;
      }
      break;
  }
}

function M_Over() {
  document.all.alfa.align = 'center';
  document.all.alfa.style.color = 'FF00FF';
}

function M_Out() {
  document.all.alfa.align = 'left';
  document.all.alfa.style.color = '0000FF';
}

function changeTextStyle(p) {
  let currentFontSize = window.getComputedStyle(p).fontSize;
  if (currentFontSize !== "48pt") {
    p.style.fontSize = "48pt";
    p.style.color = "white";
    p.style.backgroundColor = "lightblue";
  } else {
    p.style.fontSize = "16pt";
    p.style.color = "black";
    p.style.backgroundColor = "transparent";
  }
}

function changeBackgroundColorOnMouseDown(p) {
  p.style.backgroundColor = "green";
}

function changeBackgroundColorOnMouseUp(p) {
  p.style.backgroundColor = "yellow";
}

function changeBackgroundColorOnMouseOver(p) {
  p.style.backgroundColor = "red";
}

function changeBackgroundColorOnMouseOut(p) {
  p.style.backgroundColor = "lightblue";
}

function H_l() {
  let z = document.all.HH.style.color;
  if (z === "#aa00aa" || z === 'rgb(170, 0, 170)') {
    z = "#00ffff";
  } else {
    z = "#aa00aa";
  }
  document.all.HH.style.color = z;
}

function D_l() {
  let z = document.all.k1.style.backgroundColor;
  z = (z !== "red") ? "red" : "green";
  document.all.k1.style.backgroundColor = z;
}

function D_2(thi) {
  let z = thi.style.backgroundColor;
  z = (z === "#ff00ff" || z === 'rgb(255, 0, 255)') ? "#00ffff" : "ff00ff";
  thi.style.backgroundColor = z;
}
