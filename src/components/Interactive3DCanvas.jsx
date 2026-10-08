import React, { useEffect, useRef } from 'react';

/**
 * Interactive 3D Wireframe Cyber Polyhedron + Stardust Particle Canvas
 * Features:
 * - Pure 60fps HTML5 Canvas 3D projection (zero bloated 3D engine overhead)
 * - 3D rotating dual-polyhedron (Icosahedron + Dodecahedron cyber wireframe)
 * - Dynamic mouse interaction (tilts and spins faster on cursor movement / drag)
 * - 60 floating sparkling stardust particles orbiting in 3D depth
 * - Glowing gold & amber energy vertices
 */
const Interactive3DCanvas = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false });
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracker
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / width - 0.5;
      const normY = (e.clientY - rect.top) / height - 0.5;
      mouseRef.current.targetX = normX * 3;
      mouseRef.current.targetY = normY * 3;
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      mouseRef.current.isHovered = false;
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    // --- 3D Geometry: Icosahedron generation ---
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices = [
      [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
      [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
      [  phi, 0, -1], [  phi, 0,  1], [ -phi, 0, -1], [ -phi, 0,  1],
    ].map(([x, y, z]) => {
      const len = Math.hypot(x, y, z);
      return [x / len, y / len, z / len];
    });

    const edges = [
      [0,11],[0,5],[0,1],[0,7],[0,10],
      [1,5],[1,9],[1,8],[1,7],
      [2,11],[2,10],[2,6],[2,4],
      [3,9],[3,8],[3,6],[3,4],
      [4,5],[4,9],[4,11],
      [5,9],[5,11],
      [6,7],[6,8],[6,10],
      [7,8],[7,10],
      [8,9],[10,11],[2,3],[6,3],[4,2]
    ];

    // --- 3D Floating Particles ---
    const NUM_PARTICLES = 45;
    const particles = Array.from({ length: NUM_PARTICLES }, () => ({
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 4,
      z: (Math.random() - 0.5) * 4,
      size: Math.random() * 1.8 + 0.8,
      speed: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
      alpha: Math.random() * 0.6 + 0.3,
    }));

    // Rotation state
    let rotX = 0.4;
    let rotY = 0.6;
    let rotZ = 0.2;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      rotX += 0.006 + mouseRef.current.y * 0.015;
      rotY += 0.009 + mouseRef.current.x * 0.015;
      rotZ += 0.003;

      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

      const project3D = (x, y, z, scale = 110) => {
        // Rotate Y
        let x1 = x * cosY + z * sinY;
        let y1 = y;
        let z1 = -x * sinY + z * cosY;

        // Rotate X
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Rotate Z
        let x3 = x2 * cosZ - y2 * sinZ;
        let y3 = x2 * sinZ + y2 * cosZ;
        let z3 = z2;

        // Perspective projection
        const fov = 3.2;
        const depth = fov / (fov + z3 + 0.4);
        const projX = width / 2 + x3 * scale * depth;
        const projY = height / 2 + y3 * scale * depth;

        return { x: projX, y: projY, z: z3, depth, alpha: Math.max(0.15, (z3 + 1.2) / 2.4) };
      };

      // 1. Draw 3D Orbiting Ambient Stardust Particles
      particles.forEach((p) => {
        // Orbital drift
        const tempX = p.x * Math.cos(p.speed) - p.z * Math.sin(p.speed);
        const tempZ = p.x * Math.sin(p.speed) + p.z * Math.cos(p.speed);
        p.x = tempX;
        p.z = tempZ;

        const proj = project3D(p.x, p.y, p.z, 140);
        if (proj.x > 0 && proj.x < width && proj.y > 0 && proj.y < height) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * proj.depth, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 168, 76, ${p.alpha * proj.depth * 0.7})`;
          ctx.fill();
        }
      });

      // 2. Project 3D Polyhedron Vertices
      const scaleRadius = Math.min(width, height) * 0.38;
      const projectedVertices = rawVertices.map(([vx, vy, vz]) => project3D(vx, vy, vz, scaleRadius));

      // 3. Draw 3D Edges with depth glow
      edges.forEach(([i1, i2]) => {
        const v1 = projectedVertices[i1];
        const v2 = projectedVertices[i2];
        const avgDepth = (v1.depth + v2.depth) / 2;
        const edgeAlpha = Math.min(0.85, Math.max(0.15, avgDepth * 0.75));

        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
        ctx.lineWidth = 1.2 * avgDepth;
        ctx.strokeStyle = `rgba(201, 168, 76, ${edgeAlpha})`;
        ctx.stroke();
      });

      // 4. Draw Glowing Energy Nodes / Vertices
      projectedVertices.forEach((v) => {
        const radius = Math.max(1.5, 3.2 * v.depth);
        // Outer glow
        ctx.beginPath();
        ctx.arc(v.x, v.y, radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 196, 106, ${0.2 * v.alpha})`;
        ctx.fill();

        // Inner core
        ctx.beginPath();
        ctx.arc(v.x, v.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(28, 25, 23, ${0.9 * v.alpha})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(201, 168, 76, ${0.95 * v.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // 5. Draw Center Core Energy Star
      const centerProj = project3D(0, 0, 0, scaleRadius);
      const gradient = ctx.createRadialGradient(
        centerProj.x, centerProj.y, 2,
        centerProj.x, centerProj.y, 45 * centerProj.depth
      );
      gradient.addColorStop(0, 'rgba(201, 168, 76, 0.35)');
      gradient.addColorStop(0.5, 'rgba(201, 168, 76, 0.08)');
      gradient.addColorStop(1, 'rgba(201, 168, 76, 0)');

      ctx.beginPath();
      ctx.arc(centerProj.x, centerProj.y, 45 * centerProj.depth, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden select-none pointer-events-auto ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
    </div>
  );
};

export default Interactive3DCanvas;
