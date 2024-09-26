import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function Model3D() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const objRef = useRef();

  useEffect(() => {
    const loadModel = async () => {
      try {
        const mtlLoader = new MTLLoader();
        const materials = await mtlLoader.loadAsync('/model/raf.mtl');
        materials.preload();

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        const obj = await objLoader.loadAsync('/model/raf.obj');

        // Ensure materials are applied to all children
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.side = THREE.DoubleSide;
          }
        });

        objRef.current = obj;
        setLoading(false);
      } catch (err) {
        console.error('Error loading model:', err);
        setError(err.message);
      }
    };

    loadModel();
  }, []);

  // Rotate the model
  useFrame(() => {
    if (objRef.current) {
      objRef.current.rotation.y += 0.01;
    }
  });

  if (error) {
    return <Html center>{error}</Html>;
  }

  return (
    <>
      {objRef.current ? <primitive object={objRef.current} scale={[0.1, 0.1, 0.1]} /> : null}
      {loading && (
        <Html center>
          <div>Loading 3D Model...</div>
        </Html>
      )}
    </>
  );
}

export default function Scene() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model3D />
        <OrbitControls />
      </Canvas>
    </div>
  );
}