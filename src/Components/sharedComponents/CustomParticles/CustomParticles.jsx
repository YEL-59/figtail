import React, { useRef, useEffect } from "react";

const CustomParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to resize the canvas
    const resizeCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio); // Adjust scaling for high DPI screens
    };

    // Set initial canvas size
    resizeCanvas();

    const particles = [];
    const maxParticles = 100;

    class Particle {
      constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > canvas.width / devicePixelRatio) this.x = 0;
        if (this.x < 0) this.x = canvas.width / devicePixelRatio;
        if (this.y > canvas.height / devicePixelRatio) this.y = 0;
        if (this.y < 0) this.y = canvas.height / devicePixelRatio;
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * (canvas.width / devicePixelRatio);
      const y = Math.random() * (canvas.height / devicePixelRatio);
      const speedX = (Math.random() - 0.5) * 2;
      const speedY = (Math.random() - 0.5) * 2;

      particles.push(new Particle(x, y, size, speedX, speedY));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    />
  );
};

export default CustomParticles;
