import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";

export function FiberContainer() {
  return (
    <Canvas camera={{ position: [9.9666, 3.0365, 6.556165], fov: 35 }} shadows>
      <Scene />
      {/* <OrbitControls minDistance={1} maxDistance={200} /> */}
    </Canvas>
  );
}
