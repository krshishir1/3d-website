import "./App.css";

import { Canvas } from "@react-three/fiber";
import RenderPortion from "./components/RenderPortion";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <RenderPortion position={[-1.2, 0, 0]} />
        <RenderPortion position={[1.2, 0, 0]} />
      </Canvas>
    </>
  );
}

export default App;
