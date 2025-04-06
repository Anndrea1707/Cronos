import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Modelo3D = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene()); // Mantener la escena global
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const modelRef = useRef(null); // Para rastrear el modelo actual

    useEffect(() => {
        const scene = sceneRef.current;

        // Evitar reinicializar si ya existe un renderizador
        if (!rendererRef.current) {
            rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
            rendererRef.current.setSize(500, 500);
            mountRef.current.appendChild(rendererRef.current.domElement);
        }

        const renderer = rendererRef.current;

        // Configurar cámara (si no existe aún)
        if (!cameraRef.current) {
            cameraRef.current = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            cameraRef.current.position.set(0, 1, 3); // Posición inicial de la cámara
        }

        const camera = cameraRef.current;

        // Agregar luces si aún no existen
        if (scene.children.length === 0) {
            const ambientLight = new THREE.AmbientLight(0xffffff, 5);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 8);
            directionalLight.position.set(5, 5, 5);
            scene.add(directionalLight);
        }

        // Controles de cámara
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 3;

        // Cargar modelo 3D, asegurando que solo haya uno
        const loader = new GLTFLoader();
        loader.load("/DiseñoAres.glb", (gltf) => {
            // Eliminar modelo anterior, pero sin afectar luces ni cámara
            if (modelRef.current) {
                scene.remove(modelRef.current);
            }

            const model = gltf.scene;
            scene.add(model);
            modelRef.current = model; // Guardar referencia del modelo actual

            // Ajustar escala automáticamente
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3()).length();
            const center = box.getCenter(new THREE.Vector3());

            model.position.set(-center.x, -center.y, -center.z);
            camera.position.set(0, 1, size * 0.7);

            const animate = () => {
                controls.update();
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };
            animate();
        });

        return () => {
            // Al desmontar, solo quitar el modelo sin tocar la luz o la cámara
            if (modelRef.current) {
                scene.remove(modelRef.current);
                modelRef.current = null;
            }
        };
    }, []);

    return <div ref={mountRef} />;
};


export default Modelo3D;
