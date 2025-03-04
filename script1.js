let x = 700, y = 500;
        let dx = 3;

        

        function drawCircle(ctx, x, y, r, color) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }

        function moveBoat() {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");

            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas on each frame



            // House
            ctx.fillStyle = "orange";
            ctx.strokeStyle = "black";
            ctx.fillRect(0, 500, 200, 200);
            ctx.strokeRect(0, 500, 200, 200);

            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(100, 400);
            ctx.lineTo(200, 500);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.fillRect(75, 600, 50, 100);
            ctx.strokeRect(75, 600, 50, 100);
            ctx.closePath();

            ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.arc(50, 550, 30, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            // Water
            ctx.beginPath();
            ctx.fillStyle = "lightblue";
            ctx.ellipse(700, 500, 400, 200, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();

            // Clouds
            drawCircle(ctx, 70, 800, 20, "gray");
            drawCircle(ctx, 90, 820, 20, "gray");
            drawCircle(ctx, 110, 800, 30, "gray");
            drawCircle(ctx, 1370, 800, 20, "gray");
            drawCircle(ctx, 1390, 820, 20, "gray");

            // Sun
            drawCircle(ctx, 1300, 750, 50, "yellow");
            drawCircle(ctx, 1350, 700, 30, "yellow");
            drawCircle(ctx, 1355, 695, 9, "black");

            ctx.beginPath();
            ctx.moveTo(1380, 695);
            ctx.lineTo(1380, 725);
            ctx.lineTo(1405, 710);
            ctx.fillStyle = "orange";
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            // Tree
            ctx.beginPath();
            ctx.fillStyle = "green";
            ctx.fillRect(1600, 500, 5, 200);
            ctx.closePath();

            ctx.beginPath();
            ctx.ellipse(1600, 500, 150, 20, 45, 0, 2 * Math.PI);
            ctx.fillStyle = "green";
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.ellipse(1600, 500, 150, 20, -45, 0, 2 * Math.PI);
            ctx.fillStyle = "green";
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.clearRect(1400, 300, 400, 200);

            // Flowers
            drawCircle(ctx, 1540, 500, 40, "pink");
            drawCircle(ctx, 1660, 500, 40, "pink");
            drawCircle(ctx, 1570, 560, 40, "pink");
            drawCircle(ctx, 1570, 440, 40, "pink");
            drawCircle(ctx, 1620, 560, 40, "pink");
            drawCircle(ctx, 1620, 440, 40, "pink");
            drawCircle(ctx, 1600, 500, 30, "yellow");

            // Sun rays
            for (let i = 0; i < 12; i++) {
                let angle = (i * Math.PI) / 6;
                let x1 = 1600 + Math.cos(angle) * 100;
                let y1 = 100 + Math.sin(angle) * 100;
                let x2 = 1600 + Math.cos(angle) * 60;
                let y2 = 100 + Math.sin(angle) * 60;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = "yellow";
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            drawCircle(ctx, 1600, 100, 50, "yellow");

            // Moving Boat
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 100, y);
            ctx.lineTo(x + 70, y + 50);
            ctx.lineTo(x + 25, y + 50);
            ctx.fillStyle = "brown";
            ctx.fill();
            ctx.closePath();

            x += dx;
            if (x > 950 || x < 500) {
                dx *= -1;
            }
            

            requestAnimationFrame(moveBoat); // Use requestAnimationFrame for smoother animation
        }

        moveBoat();