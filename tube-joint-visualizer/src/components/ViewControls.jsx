import React from 'react';

const ViewControls = ({ 
  wireframe, 
  onToggleWireframe, 
  showJoints, 
  onToggleJoints,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onClearAll
}) => {
  return (
    <div className="control-section">
      <h3>View Controls</h3>

      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={wireframe}
            onChange={onToggleWireframe}
          />
          Wireframe Mode
        </label>
      </div>

      <div className="control-group">
        <label>
          <input
            type="checkbox"
            checked={showJoints}
            onChange={onToggleJoints}
          />
          Show Joint Highlights
        </label>
      </div>

      <div className="control-group">
        <h4>History:</h4>
        <div className="button-group">
          <button onClick={onUndo} disabled={!canUndo}>
            ↶ Undo
          </button>
          <button onClick={onRedo} disabled={!canRedo}>
            ↷ Redo
          </button>
        </div>
      </div>

      <div className="control-group">
        <button className="btn-danger" onClick={onClearAll}>
          Clear All Tubes
        </button>
      </div>

      <div className="info-panel">
        <h4>Controls:</h4>
        <ul>
          <li>Left Click + Drag: Rotate view</li>
          <li>Right Click + Drag: Pan view</li>
          <li>Scroll: Zoom in/out</li>
          <li>Click Tube: Select</li>
          <li>Drag Tube: Move position</li>
        </ul>
      </div>
    </div>
  );
};

export default ViewControls;