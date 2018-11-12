var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ch = canvas.height;
var cw = canvas.width;

var D = 60;
var a = 35;

var x = cw/5
var y = ch/3

for (var columnCounter = 1; columnCounter <= 3; columnCounter++) {
  var hexagonCounter = 1 + columnCounter % 2;
  while (hexagonCounter <= 3){
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + a / 2, y - D / 2);
    context.lineTo(x + a * 1.5, y - D / 2);
    context.lineTo(x + a * 2, y);
    context.lineTo(x + a * 1.5, y + D / 2);
    context.lineTo(x + a / 2, y + D / 2);
    context.closePath();
    context.strokeStyle = 'goldenrod'
    context.stroke();
    if (columnCounter === 3) {
      if (hexagonCounter === 3) {
        context.fillStyle = 'goldenrod';
        context.fill();
      }
    }
    y += D + 5;
    hexagonCounter++;
  }
  y -= 2.5 * (D + 5);
  x += a * 1.7;
}