import * as THREE from 'three';

export const calculateJointPosition = (parentTube, childTube, connectionPoint) => {
  // Calculate where the child tube should be positioned to connect to parent
  const parentPos = parentTube.position;
  const parentRotation = parentTube.rotation;
  
  // Default connection at the end of parent tube
  const offset = new THREE.Vector3(0, 0, parentTube.userData.length / 2);
  offset.applyEuler(parentRotation);
  
  return parentPos.clone().add(offset);
};

export const detectNearbyTubes = (currentTube, allTubes, threshold = 2) => {
  const nearbyTubes = [];
  
  allTubes.forEach((tube) => {
    if (tube.id !== currentTube.id) {
      const distance = currentTube.position.distanceTo(tube.position);
      if (distance < threshold) {
        nearbyTubes.push(tube);
      }
    }
  });
  
  return nearbyTubes;
};

export const createJointGeometry = (tube1, tube2, angle) => {
  // Create a visual indicator for the joint
  const jointRadius = Math.min(tube1.userData.width, tube1.userData.height) * 0.6;
  const geometry = new THREE.SphereGeometry(jointRadius, 16, 16);
  
  return geometry;
};

export const calculateJointAngle = (tube1Rotation, tube2Rotation) => {
  // Calculate angle between two tubes based on their rotations
  const vec1 = new THREE.Vector3(0, 0, 1).applyEuler(tube1Rotation);
  const vec2 = new THREE.Vector3(0, 0, 1).applyEuler(tube2Rotation);
  
  const angle = vec1.angleTo(vec2);
  return angle * (180 / Math.PI); // Convert to degrees
};

export const isValidJoint = (tube1, tube2, maxDistance = 3) => {
  const distance = tube1.position.distanceTo(tube2.position);
  return distance < maxDistance;
};