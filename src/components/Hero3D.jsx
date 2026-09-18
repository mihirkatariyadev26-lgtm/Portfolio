import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group to hold all 3D elements for global mouse tilt
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central 3D Core - Geometric Polyhedron (Monochrome Silver/White)
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 2);
    
    const wireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
      roughness: 0.1,
      metalness: 0.95
    });
    const coreWireframe = new THREE.Mesh(coreGeometry, wireframeMaterial);
    mainGroup.add(coreWireframe);

    // Inner Obsidian Core with Specular Shine
    const innerGeometry = new THREE.IcosahedronGeometry(1.1, 1);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x1c1c1f,
      roughness: 0.15,
      metalness: 0.9
    });
    const innerCore = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerCore);

    // 2. Surrounding Orbital Rings (Monochrome Platinum & Silver)
    const ringGroup = new THREE.Group();
    mainGroup.add(ringGroup);

    const createRing = (radius, tube, colorHex, rotX, rotY) => {
      const ringGeom = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.45,
        wireframe: true
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(2.3, 0.02, 0xffffff, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(2.8, 0.015, 0xd4d4d8, -Math.PI / 4, Math.PI / 4);
    const ring3 = createRing(3.2, 0.01, 0xa1a1aa, Math.PI / 2, 0);
    ringGroup.add(ring1);
    ringGroup.add(ring2);
    ringGroup.add(ring3);

    // 3. Monochrome Cyber Particle Constellation
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0xffffff);
    const color2 = new THREE.Color(0xe4e4e7);
    const color3 = new THREE.Color(0xa1a1aa);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = Math.random() > 0.6 ? color1 : Math.random() > 0.3 ? color2 : color3;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 4. Dynamic Lighting (Monochrome White & Soft Silver)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const whitePoint = new THREE.PointLight(0xffffff, 3.5, 20);
    whitePoint.position.set(4, 3, 4);
    scene.add(whitePoint);

    const silverPoint = new THREE.PointLight(0xd4d4d8, 2.5, 20);
    silverPoint.position.set(-4, -3, 3);
    scene.add(silverPoint);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate central objects
      coreWireframe.rotation.x = elapsedTime * 0.25;
      coreWireframe.rotation.y = elapsedTime * 0.35;
      innerCore.rotation.x = -elapsedTime * 0.3;
      innerCore.rotation.y = -elapsedTime * 0.2;

      // Rotate orbital rings
      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.x = elapsedTime * 0.3;
      ring3.rotation.y = elapsedTime * 0.2;

      // Rotate particles slowly
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = elapsedTime * 0.02;

      // Interactive tilt based on mouse
      mainGroup.rotation.y = targetX * 0.5 + Math.sin(elapsedTime * 0.5) * 0.1;
      mainGroup.rotation.x = -targetY * 0.5 + Math.cos(elapsedTime * 0.5) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      coreGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="hero-3d-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
      aria-hidden="true"
    />
  );
}
