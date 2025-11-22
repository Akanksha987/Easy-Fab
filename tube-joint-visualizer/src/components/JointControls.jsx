import React, { useState, useEffect } from 'react';

const JointControls = ({ selectedTube, onUpdateTube }) => {
  const [angleX, setAngleX] = useState(0);
  const [angleY, setAngleY] = useState(0);
  const [angleZ, setAngleZ] = useState(0);

  useEffect(() => {
    if (selectedTube) {
      setAngleX(selectedTube.rotation.x);
      setAngleY(selectedTube.rotation.y);
      setAngleZ(selectedTube.rotation.z);
    }
  }, [selectedTube]);

  const handleAngleChange = (axis, value) => {
    const newRotation = { ...selectedTube.rotation };
    newRotation[axis] = parseFloat(value);

    if (axis === 'x') setAngleX(value);
    if (axis === 'y') setAngleY(value);
    if (axis === 'z') setAngleZ(value);

    onUpdateTube(selectedTube.id, { rotation: newRotation });
  };

  const setPresetAngle = (angle) => {
    const radians = (angle * Math.PI) / 180;
    setAngleZ(radians);
    onUpdateTube(selectedTube.id, {
      rotation: { ...selectedTube.rotation, z: radians },
    });
  };

  if (!selectedTube) {
    return (
      <div className="control-section">
        <h3>Joint Controls</h3>
        <p className="info-text">Select a tube to adjust rotation</p>
      </div>
    );
  }

  return (
    <div className="control-section">
      <h3>Joint Controls</h3>
      <p className="info-text">Selected: Tube {selectedTube.id.slice(-4)}</p>

      <div className="preset-angles">
        <h4>Preset Angles:</h4>
        <div className="button-group">
          <button onClick={() => setPresetAngle(0)}>0°</button>
          <button onClick={() => setPresetAngle(30)}>30°</button>
          <button onClick={() => setPresetAngle(45)}>45°</button>
          <button onClick={() => setPresetAngle(90)}>90°</button>
          <button onClick={() => setPresetAngle(135)}>135°</button>
        </div>
      </div>

      <div className="control-group">
        <label>Rotation X: {((angleX * 180) / Math.PI).toFixed(1)}°</label>
        <input
          type="range"
          min="0"
          max={2 * Math.PI}
          step="0.01"
          value={angleX}
          onChange={(e) => handleAngleChange('x', e.target.value)}
        />
      </div>

      <div className="control-group">
        <label>Rotation Y: {((angleY * 180) / Math.PI).toFixed(1)}°</label>
        <input
          type="range"
          min="0"
          max={2 * Math.PI}
          step="0.01"
          value={angleY}
          onChange={(e) => handleAngleChange('y', e.target.value)}
        />
      </div>

      <div className="control-group">
        <label>Rotation Z: {((angleZ * 180) / Math.PI).toFixed(1)}°</label>
        <input
          type="range"
          min="0"
          max={2 * Math.PI}
          step="0.01"
          value={angleZ}
          onChange={(e) => handleAngleChange('z', e.target.value)}
        />
      </div>
    </div>
  );
};

export default JointControls;