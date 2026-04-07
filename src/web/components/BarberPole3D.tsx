import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function BarberPoleGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const stripeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  // Create helix stripe geometry
  const helixGeometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      Array.from({ length: 60 }, (_, i) => {
        const t = i / 59;
        const angle = t * Math.PI * 8;
        const y = t * 4 - 2;
        return new THREE.Vector3(
          Math.cos(angle) * 0.52,
          y,
          Math.sin(angle) * 0.52
        );
      })
    );
    return new THREE.TubeGeometry(curve, 200, 0.07, 8, false);
  }, []);

  const helixGeometry2 = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      Array.from({ length: 60 }, (_, i) => {
        const t = i / 59;
        const angle = t * Math.PI * 8 + Math.PI;
        const y = t * 4 - 2;
        return new THREE.Vector3(
          Math.cos(angle) * 0.52,
          y,
          Math.sin(angle) * 0.52
        );
      })
    );
    return new THREE.TubeGeometry(curve, 200, 0.07, 8, false);
  }, []);

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Main pole cylinder */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 4, 32, 1, true]} />
        <meshStandardMaterial
          color="#1a1a1a"
          side={THREE.BackSide}
          transparent
          opacity={0.0}
        />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 4, 32]} />
        <meshStandardMaterial color="#F5F0E8" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Gold helix stripe */}
      <mesh geometry={helixGeometry}>
        <meshStandardMaterial color="#C9A84C" roughness={0.1} metalness={0.6} emissive="#C9A84C" emissiveIntensity={0.2} />
      </mesh>

      {/* Dark helix stripe */}
      <mesh geometry={helixGeometry2}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.4} />
      </mesh>

      {/* Top cap */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#C9A84C" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Bottom cap */}
      <mesh position={[0, -2, 0]} rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#C9A84C" roughness={0.1} metalness={0.8} />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const count = 80;
  const mesh = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      sz[i] = Math.random() * 0.03 + 0.01;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial color="#C9A84C" size={0.04} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export default function BarberPole3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, -2, -5]} intensity={0.4} color="#C9A84C" />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#C9A84C" />
      <FloatingParticles />
      <BarberPoleGeometry />
    </Canvas>
  );
}
