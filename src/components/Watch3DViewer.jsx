import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from "three-stdlib";
import { DragControls } from "three-stdlib";
import products from "../data/products"; // Asegúrate de que la ruta sea correcta
import "../css/Watch3DViewer.css";

const Watch3DViewer = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const dragControlsRef = useRef(null);
  const manoRef = useRef(null);
  const relojActualRef = useRef(null);
  const instructionTextRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const relojScale = [0.15, 0.15, 0.2];
  const manoScale = [0.8, 0.8, 0.8];

  useEffect(() => {
    if (!containerRef.current) {
      console.error("Container ref is null");
      setError("Error: Contenedor no encontrado");
      return;
    }

    // Inicializar renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    const width = containerRef.current.clientWidth;
    const height = 600; // Alto fijo
    renderer.setSize(width, height);
    containerRef.current.innerHTML = ""; // Limpiar cualquier contenido previo
    containerRef.current.appendChild(renderer.domElement);

    // Inicializar cámara
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.set(0, 1.2, 2.5);
    camera.lookAt(0, 0.5, 0);

    // Controles de órbita
    controlsRef.current = new OrbitControls(camera, renderer.domElement);
    controlsRef.current.enableDamping = true;
    controlsRef.current.enableZoom = true;

    // Iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(2, 2, 2);
    sceneRef.current.add(ambientLight, directionalLight);

    // Cargar modelo de mano
    const loader = new GLTFLoader();
    setLoading(true);
    loader.load(
      "/manoHombre2.glb",
      (gltf) => {
        manoRef.current = gltf.scene;
        manoRef.current.scale.set(...manoScale);
        manoRef.current.position.set(0, 0, 0);
        manoRef.current.rotation.set(0, -0.88, 0);

        const wristHelper = new THREE.AxesHelper(0.3);
        wristHelper.position.set(0.12, 0.07, 0.18);
        manoRef.current.add(wristHelper);

        sceneRef.current.add(manoRef.current);
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error("Error cargando modelo de mano:", err);
        setError("No se pudo cargar el modelo de mano");
        setLoading(false);
      }
    );

    // Animación
    const animate = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      requestAnimationFrame(animate);
      controlsRef.current.update();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();

    // Manejo de redimensionamiento
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !containerRef.current) return;
      const width = containerRef.current.clientWidth;
      cameraRef.current.aspect = width / 600;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, 600);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Llamada inicial para ajustar el tamaño

    // Limpieza
    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && rendererRef.current.domElement) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current.dispose();
    };
  }, []);

  const getDropPosition = (event) => {
    if (!cameraRef.current) return new THREE.Vector3();
    const mouse = new THREE.Vector2();
    const rect = rendererRef.current.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);
    return raycaster.ray.origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(2));
  };

  const acoplarRelojAMuñeca = (reloj) => {
    if (!manoRef.current) return;

    // Posición relativa a la mano
    reloj.position.set(0.12, 0.07, 0.18);

    // Rotación para que quede natural
    reloj.rotation.set(
      THREE.MathUtils.degToRad(-15),
      THREE.MathUtils.degToRad(-95),
      THREE.MathUtils.degToRad(-5)
    );

    // Rotación adicional para mejor visualización
    reloj.rotateX(THREE.MathUtils.degToRad(10));

    // Hacer que el reloj sea hijo de la mano
    manoRef.current.add(reloj);

    // Actualizar matriz mundial
    manoRef.current.updateMatrixWorld();
  };

  const handleDragStart = (event, modelPath) => {
    event.dataTransfer.setData("model", modelPath);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const modelPath = event.dataTransfer.getData("model");
    if (!modelPath) {
      console.error("No model path provided");
      setError("No se proporcionó la ruta del modelo");
      return;
    }

    if (relojActualRef.current) {
      sceneRef.current.remove(relojActualRef.current);
      if (dragControlsRef.current) {
        dragControlsRef.current.dispose();
      }
    }

    setLoading(true);
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        relojActualRef.current = gltf.scene;
        relojActualRef.current.scale.set(...relojScale);
        relojActualRef.current.position.copy(getDropPosition(event));
        sceneRef.current.add(relojActualRef.current);

        // Configurar controles de arrastre
        if (dragControlsRef.current) {
          dragControlsRef.current.dispose();
        }

        dragControlsRef.current = new DragControls(
          [relojActualRef.current],
          cameraRef.current,
          rendererRef.current.domElement
        );

        dragControlsRef.current.addEventListener("dragstart", () => {
          controlsRef.current.enabled = false;
        });

        dragControlsRef.current.addEventListener("dragend", () => {
          controlsRef.current.enabled = true;

          if (manoRef.current && relojActualRef.current) {
            const wristPosition = new THREE.Vector3(0.12, 0.07, 0.18);
            wristPosition.applyMatrix4(manoRef.current.matrixWorld);

            // Depuración: Verificar posiciones
            console.log("Posición del reloj:", relojActualRef.current.position);
            console.log("Posición de la muñeca:", wristPosition);
            const distance = relojActualRef.current.position.distanceTo(wristPosition);
            console.log("Distancia a la muñeca:", distance);

            if (distance < 0.3) {
              acoplarRelojAMuñeca(relojActualRef.current);
              if (instructionTextRef.current) {
                instructionTextRef.current.textContent = "Reloj colocado correctamente";
              }
            }
          }
        });
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error("Error cargando modelo de reloj:", err);
        setError("No se pudo cargar el modelo de reloj");
        setLoading(false);
      }
    );
  };

  return (
    <div className="watch-3d-viewer">
      {loading && <div className="loading">Cargando modelo...</div>}
      {error && <div className="error">{error}</div>}
      <div
        id="sceneContainer"
        ref={containerRef}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      ></div>
      <div id="relojBar" className="reloj-bar">
        {products.map((product) => (
          <div
            key={product.id}
            className="reloj-item"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, product.model3D)}
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <p id="instructionText" ref={instructionTextRef}>
        Arrastra un reloj a la escena
      </p>
    </div>
  );
};

export default Watch3DViewer;