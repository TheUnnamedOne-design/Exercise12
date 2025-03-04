const canvas = document.getElementById("clockCanvas");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;

setInterval(drawClock, 1000);

function drawClock() {
    ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, "black");
    grad.addColorStop(0.5, "pink");
    grad.addColorStop(1, "black");

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "pink";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.09, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "20px Arial";
    for (let i = 1; i <= 12; i++) {
        let angle = (-Math.PI / 2) + i * Math.PI / 6;
        let x = radius * 0.85 * Math.cos(angle);
        let y = radius * 0.85 * Math.sin(angle);
        ctx.fillText(i.toString(), x, y);
    }
}

function drawTime(ctx, radius) {
    const date = new Date();
    let hours = date.getHours() % 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let secondAngle = (-Math.PI / 2) + (Math.PI / 30) * seconds;
    let minuteAngle = (-Math.PI / 2) + (Math.PI / 30) * minutes + (Math.PI / 1800) * seconds;
    let hourAngle = (-Math.PI / 2) + (Math.PI / 6) * hours + (Math.PI / 360) * minutes;

    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(radius * 0.8 * Math.cos(secondAngle), radius * 0.8 * Math.sin(secondAngle));
    ctx.stroke();

    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(radius * 0.7 * Math.cos(minuteAngle), radius * 0.7 * Math.sin(minuteAngle));
    ctx.stroke();

    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(radius * 0.5 * Math.cos(hourAngle), radius * 0.5 * Math.sin(hourAngle));
    ctx.stroke();
}
