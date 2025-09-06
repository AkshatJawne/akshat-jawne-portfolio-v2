import React, { useEffect, useRef } from 'react';
import styles from './CubeAnimation.module.scss';

const CubeAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    interface Cube {
      x: number;
      y: number;
      z: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      fallSpeed: number;
      color: string;
      opacity: number;
    }

    const cubes: Cube[] = [];
    const colors = ['#0066CC', '#FF3B30', '#000000', '#007AFF'];

    for (let i = 0; i < 15; i++) {
      cubes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        z: Math.random() * 1000,
        size: Math.random() * 40 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        fallSpeed: Math.random() * 1 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    const drawCube = (cube: Cube) => {
      ctx.save();
      ctx.translate(cube.x, cube.y);
      ctx.rotate(cube.rotation);
      
      const perspective = 1000 / (1000 + cube.z);
      const size = cube.size * perspective;
      
      ctx.globalAlpha = cube.opacity * perspective;
      
      // Front face
      ctx.fillStyle = cube.color;
      ctx.fillRect(-size/2, -size/2, size, size);
      
      // Add depth effect
      ctx.strokeStyle = cube.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-size/2, -size/2);
      ctx.lineTo(-size/2 + size*0.2, -size/2 - size*0.2);
      ctx.lineTo(size/2 + size*0.2, -size/2 - size*0.2);
      ctx.lineTo(size/2, -size/2);
      ctx.closePath();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(size/2, -size/2);
      ctx.lineTo(size/2 + size*0.2, -size/2 - size*0.2);
      ctx.lineTo(size/2 + size*0.2, size/2 - size*0.2);
      ctx.lineTo(size/2, size/2);
      ctx.closePath();
      ctx.stroke();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      cubes.forEach(cube => {
        cube.rotation += cube.rotationSpeed;
        cube.y += cube.fallSpeed;
        cube.z -= 2;
        
        if (cube.y > canvas.height + 100) {
          cube.y = -100;
          cube.x = Math.random() * canvas.width;
          cube.z = Math.random() * 1000;
        }
        
        if (cube.z < -500) {
          cube.z = 1000;
        }
        
        drawCube(cube);
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default CubeAnimation;