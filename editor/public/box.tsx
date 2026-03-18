"use client";

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import * as THREE from "three";

const RotatingBox = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const meshRef = useRef<THREE.Mesh>(null);

  const props = useSpring({
    from: {
      scale: [1, 1, 1],
      color: "gray",
    },
    scale: clicked ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "cyan" : "white",
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <a.mesh
      ref={meshRef}
      // Use props.scale safely
      scale={props.scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked((prev) => !prev)}
      castShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      {/* Use interpolated color */}
      <a.meshStandardMaterial color={props.color} />
    </a.mesh>
  );
};

export default function BoxScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <RotatingBox />
    </Canvas>
  );
}
