import * as THREE from 'three';

export const createTubeGeometry = (width, height, length, thickness) => {
  // Create hollow rectangular tube using CSG-like approach
  const outerGeometry = new THREE.BoxGeometry(width, height, length);
  const innerGeometry = new THREE.BoxGeometry(
    width - thickness * 2,
    height - thickness * 2,
    length - thickness * 2
  );

  // For simplicity, we'll use EdgesGeometry for wireframe
  // and a simple BoxGeometry for solid view
  return {
    outer: outerGeometry,
    inner: innerGeometry,
    edges: new THREE.EdgesGeometry(outerGeometry),
  };
};

export const createTubeMesh = (width, height, length, thickness, color, wireframe = false) => {
  const geometry = new THREE.BoxGeometry(width, height, length);
  const material = new THREE.MeshStandardMaterial({
    color: color,
    wireframe: wireframe,
    transparent: true,
    opacity: wireframe ? 1 : 0.8,
  });

  const mesh = new THREE.Mesh(geometry, material);
  
  // Add edges for better visibility
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
  const edgeLines = new THREE.LineSegments(edges, lineMaterial);
  mesh.add(edgeLines);

  return mesh;
};

export const snapAngle = (angle, snapAngles = [0, 45, 90, 135, 180, 225, 270, 315]) => {
  const threshold = 5; // degrees
  for (let snapAngle of snapAngles) {
    if (Math.abs(angle - snapAngle) < threshold) {
      return snapAngle;
    }
  }
  return angle;
};

export const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

export const radiansToDegrees = (radians) => {
  return radians * (180 / Math.PI);
};