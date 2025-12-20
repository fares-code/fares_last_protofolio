"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const StarBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      3000 // زيادة الرؤية للأعماق البعيدة
    );
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const createStars = () => {
      const pageHeight = document.body.scrollHeight * 50; // زيادة المدى السفلي
      const starCount = Math.floor((window.innerWidth * pageHeight) / 2500); // عدد أكبر من النجوم
      const starGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * window.innerWidth * 3; // X
        positions[i + 1] = Math.random() * pageHeight;                // Y يغطي كامل الصفحة + زيادة
        positions[i + 2] = (Math.random() - 0.5) * 500;               // Z
      }

      starGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.3,
      });

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
      return { stars, positions, pageHeight };
    };

    let { stars, positions, pageHeight } = createStars();

    const animate = () => {
      requestAnimationFrame(animate);

      // تحريك النجوم للأعلى
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 1.5; // سرعة أعلى
        if (positions[i] < 0) positions[i] = pageHeight; // إعادة للنهاية السفلى
      }

      (stars.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      scene.remove(stars);
      stars.geometry.dispose();
      (stars.material as THREE.Material).dispose();
      ({ stars, positions, pageHeight } = createStars());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden"
    />
  );
};

export default StarBackground;
