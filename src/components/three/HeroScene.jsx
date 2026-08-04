import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";

const accent = "#ff5e00";
const ember = "#ff2f00";

function useReducedMotionPreference() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function HeroCore() {
  const group = useRef();
  const shell = useRef();
  const core = useRef();
  const reducedMotion = useReducedMotionPreference();
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const speed = reducedMotion ? 0.25 : 1;
    pointer.current.x += (state.pointer.x * 0.35 - pointer.current.x) * 0.04;
    pointer.current.y += (state.pointer.y * 0.35 - pointer.current.y) * 0.04;

    if (group.current) {
      group.current.rotation.x = pointer.current.y;
      group.current.rotation.y += delta * 0.18 * speed;
    }

    if (shell.current) {
      shell.current.rotation.z -= delta * 0.08 * speed;
    }

    if (core.current) {
      core.current.rotation.x += delta * 0.32 * speed;
      core.current.rotation.y -= delta * 0.42 * speed;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.65}>
      <group ref={group} position={[0.2, 0, 0]}>
        <mesh ref={shell} scale={2.25}>
          <icosahedronGeometry args={[1, 5]} />
          <MeshDistortMaterial
            color={accent}
            distort={0.22}
            speed={reducedMotion ? 0.25 : 1.15}
            roughness={0.18}
            metalness={0.55}
            transparent
            opacity={0.55}
            emissive={ember}
            emissiveIntensity={0.32}
          />
        </mesh>

        <mesh ref={core} scale={1.05}>
          <torusKnotGeometry args={[0.74, 0.14, 220, 28]} />
          <meshStandardMaterial
            color="#111111"
            metalness={0.95}
            roughness={0.22}
            emissive={accent}
            emissiveIntensity={0.26}
          />
        </mesh>

        <OrbitRing radius={1.85} rotation={[0.9, 0.35, 0.15]} speed={0.18} />
        <OrbitRing radius={2.35} rotation={[1.35, -0.2, 0.85]} speed={-0.13} thin />
        <OrbitRing radius={2.75} rotation={[0.25, 1.2, -0.55]} speed={0.09} thin />
      </group>
    </Float>
  );
}

function OrbitRing({ radius, rotation, speed, thin = false }) {
  const ring = useRef();

  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * speed;
  });

  return (
    <group ref={ring} rotation={rotation}>
      <mesh>
        <torusGeometry args={[radius, thin ? 0.008 : 0.012, 12, 180]} />
        <meshBasicMaterial color={accent} transparent opacity={thin ? 0.18 : 0.34} />
      </mesh>
    </group>
  );
}

function seededNoise(index, offset = 0) {
  const value = Math.sin(index * 12.9898 + offset * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleField() {
  const points = useRef();
  const particles = useMemo(() => {
    const positions = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i += 1) {
      const radius = 2.8 + seededNoise(i, 1) * 2.8;
      const theta = seededNoise(i, 2) * Math.PI * 2;
      const phi = Math.acos(2 * seededNoise(i, 3) - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.025;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#ffffff" transparent opacity={0.42} depthWrite={false} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 5, 6]} intensity={2.4} color="#ffffff" />
        <directionalLight position={[-4, -1, -2]} intensity={1.5} color={accent} />
        <pointLight position={[0, 0, 3]} intensity={2.3} color="#ff8a3a" />
        <pointLight position={[-3, 2.5, 2]} intensity={1.2} color="#ffffff" />

        <HeroCore />
        <ParticleField />
        <Sparkles count={70} scale={6.5} size={1.8} speed={0.35} color="#ffffff" opacity={0.42} />
      </Suspense>
    </Canvas>
  );
}

