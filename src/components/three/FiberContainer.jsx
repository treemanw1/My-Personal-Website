import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";

export function FiberContainer({cameraPos}) {
  return (
    <Canvas camera={{ position: [cameraPos.x, cameraPos.y, cameraPos.z], fov: 35 }} shadows>
      <Scene />
      {/* <OrbitControls minDistance={1} maxDistance={200} /> */}
    </Canvas>
  );
}
