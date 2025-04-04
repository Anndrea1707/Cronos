import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const Model = ({ modelPath }) => {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={1.5} rotation={[0, Math.PI, 0]} />;
};

const ModelViewer = ({ modelPath }) => {
    return (
        <Canvas 
            camera={{ position: [-15, 1, 3], fov: 70 }} // Ajusta el zoom y posición inicial
            className="model-viewer"
        >
            <ambientLight intensity={0.8} />
            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} />
            <Suspense fallback={null}>
                <Model modelPath={modelPath} />
            </Suspense>
            <OrbitControls 
                enableZoom={true} 
                minDistance={2} // Controla qué tan cerca puedes hacer zoom
                maxDistance={20} // Controla qué tan lejos puedes alejarte
                target={[0, 0, 0]} // Centra la vista en el modelo
            />
            <Environment preset="city" />
        </Canvas>
    );
};

export default ModelViewer;
