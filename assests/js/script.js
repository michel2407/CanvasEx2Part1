var canvas  = document.querySelector('#house');
var context = canvas.getContext('2d');

context.fillStyle = 'blue';
context.fillRect(100, 100, 300, 200);

context.fillStyle = 'grey';
context.fillRect(120, 130, 50, 50);

context.fillStyle = 'grey';
context.fillRect(320, 130, 50, 50);

context.fillStyle = 'grey';
context.fillRect(220, 210, 50, 90);

context.fillStyle = 'green';
context.fillRect(100, 50, 400, 50);

context.fillStyle = 'green';
context.fillRect(150, 20, 200, 40);
