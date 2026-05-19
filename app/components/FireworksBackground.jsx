"use client";

import { useEffect, useRef } from "react";

export default function FireworksBackground() {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const fireworks = [];

        // ==================================================
        // Particle
        // ==================================================

        class Particle {

            constructor(x, y, color, angle, speed) {

                this.x = x;
                this.y = y;

                this.color = color;

                this.life = 180;
                this.alpha = 1;

                this.dx = Math.cos(angle) * speed;
                this.dy = Math.sin(angle) * speed;
            }

            update() {

                this.x += this.dx;
                this.y += this.dy;

                // gravity
                this.dy += 0.015;

                this.life--;

                this.alpha -= 0.01;
            }

            draw() {

                ctx.save();

                ctx.globalAlpha = this.alpha;

                const gradient = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    0,
                    this.x,
                    this.y,
                    12
                );

                gradient.addColorStop(0, "#ffffff");
                gradient.addColorStop(0.2, this.color);
                gradient.addColorStop(1, "transparent");

                ctx.beginPath();

                ctx.arc(
                    this.x,
                    this.y,
                    3.5,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = gradient;

                ctx.fill();

                ctx.restore();
            }
        }

        // ==================================================
        // Create Firework
        // ==================================================

        function createFirework(customX, customY) {

            const x =
                customX ??
                Math.random() * width;

            const y =
                customY ??
                Math.random() * height + 50;

            const colors = [
                "#ffd6e0",
                "#ffe8a3",
                "#cdb4ff",
                "#bde0fe",
                "#ffffff",
                "#ffc6ff",
                "#f8edeb"
            ];

            const particleCount =
                Math.random() > 0.7
                    ? 200
                    : 100;

            for (let i = 0; i < particleCount; i++) {

                const angle =
                    (Math.PI * 2 * i) / particleCount;

                const speed =
                    Math.random() * 2 + 0.1;

                // 每个粒子随机颜色
                const color =
                    colors[
                    Math.floor(Math.random() * colors.length)
                    ];

                fireworks.push(
                    new Particle(
                        x,
                        y,
                        color,
                        angle,
                        speed
                    )
                );
            }
        }

        // ==================================================
        // Animation
        // ==================================================

        function animate() {

            // 拖尾
            ctx.fillRect(0, 0, width, height);

            fireworks.forEach((particle, index) => {

                particle.update();
                particle.draw();

                if (
                    particle.life <= 0 ||
                    particle.alpha <= 0
                ) {
                    fireworks.splice(index, 1);
                }
            });

            requestAnimationFrame(animate);
        }

        animate();

        // ==================================================
        // Multiple Fireworks
        // ==================================================

        function launchFireworks() {

            const count =
                Math.floor(Math.random() * 3) + 4;

            for (let i = 0; i < count; i++) {

                const x =
                    (width / count) * i +
                    Math.random() * 250;

                const y =
                    Math.random() * height + 50;

                createFirework(x, y);
            }
        }

        launchFireworks();

        const interval = setInterval(() => {

            launchFireworks();

        }, 2600);

        // ==================================================
        // Resize
        // ==================================================

        const handleResize = () => {

            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        // ==================================================
        // Cleanup
        // ==================================================

        return () => {

            clearInterval(interval);

            window.removeEventListener(
                "resize",
                handleResize
            );
        };

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="
                fixed
                inset-0
                z-0
                pointer-events-none
                opacity-20
                will-change-transform
            "
        />
    );
}