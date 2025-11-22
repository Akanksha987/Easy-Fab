import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, GizmoHelper, GizmoViewport } from '@react-three/drei';
import * as THREE from 'three';

const Tube3D = ({ tube, isSelected, onSelect, onDrag, wireframe, showJoints }) => {
  const meshRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsDragging(true);
    onSelect(tube.id);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      e.stopPropagation();
      const newPosition = {
        x: e.point.x,
        y: e.point.y,
        z: e.point.z,
      };
      onDrag(tube.id, newPosition);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <group
      position={[tube.position.x, tube.position.y, tube.position.z]}
      rotation={[tube.rotation.x, tube.rotation.y, tube.rotation.z]}
    >
      <mesh
        ref={meshRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <boxGeometry args={[tube.width, tube.height, tube.length]} />
        <meshStandardMaterial
          color={isSelected ? '#fbbf24' : tube.color}
          wireframe={wireframe}
          transparent={!wireframe}
          opacity={wireframe ? 1 : 0.8}
        />
      </mesh>
      
      {/* Edge lines for better visibility */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(tube.width, tube.height, tube.length)]} />
        <lineBasicMaterial attach="material" color={isSelected ? '#000000' : '#222222'} linewidth={2} />
      </lineSegments>

      {/* Joint indicator when selected */}
      {isSelected && showJoints && (
        <mesh position={[0, 0, tube.length / 2]}>
          <sphereGeometry args={[Math.min(tube.width, tube.height) * 0.3, 16, 16]} />
          <meshStandardMaterial color="#ef4444" transparent opacity={0.6} />
        </mesh>
      )}
    </group>
  );
};

const Canvas3D = ({ tubes, selectedTubeId, onSelectTube, onUpdateTube, wireframe, showJoints }) => {
  const handleDrag = (tubeId, newPosition) => {
    onUpdateTube(tubeId, { position: newPosition });
  };

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [30, 30, 30], fov: 50 }}
        shadows
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -10]} intensity={0.3} />
        <pointLight position={[0, 10, 0]} intensity={0.5} />

        {/* Grid */}
        <Grid
          args={[100, 100]}
          cellSize={5}
          cellThickness={0.5}
          cellColor="#6b7280"
          sectionSize={10}
          sectionThickness={1}
          sectionColor="#3b82f6"
          fadeDistance={100}
          fadeStrength={1}
          followCamera={false}
        />

        {/* Tubes */}
        {tubes.map((tube) => (
          <Tube3D
            key={tube.id}
            tube={tube}
            isSelected={selectedTubeId === tube.id}
            onSelect={onSelectTube}
            onDrag={handleDrag}
            wireframe={wireframe}
            showJoints={showJoints}
          />
        ))}

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={200}
        />

        {/* Gizmo Helper */}
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport axisColors={['#ef4444', '#22c55e', '#3b82f6']} labelColor="white" />
        </GizmoHelper>
      </Canvas>
    </div>
  );
};

export default Canvas3D;