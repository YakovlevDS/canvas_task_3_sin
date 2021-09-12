let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let x = 0;




drawSin = () => {
	y = Math.sin(x);
	x >= 78 ? x = 0 :x += 0.2;
	ctx.fillRect(5 * x, 100 + 20 * y, 5, 5);
	setTimeout(drawSin, 30);
}
drawSin();

