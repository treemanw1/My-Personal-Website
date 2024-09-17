import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";

export function FiberContainer() {
  return (
    <Canvas camera={{ position: [8.9666, 1.0365, 5.556165], fov: 40 }} shadows>
      <Scene />
      {/* <OrbitControls minDistance={1} maxDistance={200} /> */}
    </Canvas>
  );
}
