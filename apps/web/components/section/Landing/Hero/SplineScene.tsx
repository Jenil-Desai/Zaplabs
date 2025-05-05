"use client";
import React, {useEffect, useRef} from "react";

const SplineScene = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Simple 3D animation with vanilla JS as a fallback until we can add three.js
        const canvas = canvasRef.current;

        if (canvas) {
            // Create animated shapes
            const shapes: {
                element: HTMLDivElement;
                x: number;
                y: number;
                speedX: number;
                speedY: number;
                rotation: number;
                rotationSpeed: number;
            }[] = [];
            const numShapes = 5;

            for (let i = 0; i < numShapes; i++) {
                const shape = document.createElement("div");
                const size = Math.random() * 80 + 40;

                shape.style.position = "absolute";
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                shape.style.borderRadius = i % 2 === 0 ? "50%" : "30%";
                shape.style.background = `rgba(255, 222, 226, ${Math.random() * 0.5 + 0.2})`;
                shape.style.left = `${Math.random() * 80 + 10}%`;
                shape.style.top = `${Math.random() * 80 + 10}%`;
                shape.style.transform = "translate(-50%, -50%)";
                shape.style.animation = `floating ${Math.random() * 3 + 2}s ease-in-out infinite`;
                shape.style.animationDelay = `${Math.random() * 2}s`;
                shape.style.boxShadow = "0 4px 30px rgba(255, 192, 203, 0.2)";
                shape.style.backdropFilter = "blur(5px)";
                shape.style.zIndex = "1";

                canvas.appendChild(shape);
                shapes.push({
                    element: shape,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: (Math.random() - 0.5) * 0.2,
                    rotation: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 0.5,
                });
            }

            // Simple animation loop
            const animate = () => {
                shapes.forEach((shape) => {
                    shape.x += shape.speedX;
                    shape.y += shape.speedY;
                    shape.rotation += shape.rotationSpeed;

                    // Boundary checks
                    if (shape.x < 0 || shape.x > 100) shape.speedX *= -1;
                    if (shape.y < 0 || shape.y > 100) shape.speedY *= -1;

                    shape.element.style.left = `${shape.x}%`;
                    shape.element.style.top = `${shape.y}%`;
                    shape.element.style.transform = `translate(-50%, -50%) rotate(${shape.rotation}deg)`;
                });

                requestAnimationFrame(animate);
            };

            animate();

            return () => {
                shapes.forEach((shape) => {
                    if (canvas.contains(shape.element)) {
                        canvas.removeChild(shape.element);
                    }
                });
            };
        }
    }, []);

    return <div ref={canvasRef} className="absolute inset-0 overflow-hidden"></div>;
};

export default SplineScene;
