import React, { useState } from 'react';

const TubeControls = ({ onAddTube }) => {
  const [tubeType, setTubeType] = useState('rectangular');
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const [length, setLength] = useState(10);
  const [thickness, setThickness] = useState(0.5);
  const [color, setColor] = useState('#3b82f6');

  const handleAddTube = () => {
    onAddTube({
      type: tubeType,
      width: parseFloat(width),
      height: parseFloat(height),
      length: parseFloat(length),
      thickness: parseFloat(thickness),
      color: color,
    });
  };

  return (
    <div className="control-section">
      <h3>Add New Tube</h3>
      
      <div className="control-group">
        <label>Tube Type:</label>
        <select value={tubeType} onChange={(e) => setTubeType(e.target.value)}>
          <option value="rectangular">Rectangular</option>
          <option value="square">Square</option>
        </select>
      </div>

      <div className="control-group">
        <label>Width:</label>
        <input
          type="number"
          min="1"
          max="20"
          step="0.5"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>

      <div className="control-group">
        <label>Height:</label>
        <input
          type="number"
          min="1"
          max="20"
          step="0.5"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          disabled={tubeType === 'square'}
        />
      </div>

      <div className="control-group">
        <label>Length:</label>
        <input
          type="number"
          min="1"
          max="50"
          step="0.5"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div className="control-group">
        <label>Thickness:</label>
        <input
          type="number"
          min="0.1"
          max="5"
          step="0.1"
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
        />
      </div>

      <div className="control-group">
        <label>Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <button className="btn-primary" onClick={handleAddTube}>
        Add Tube
      </button>
    </div>
  );
};

export default TubeControls;