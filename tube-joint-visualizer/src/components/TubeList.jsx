import React from 'react';

const TubeList = ({ tubes, selectedTubeId, onSelectTube, onRemoveTube }) => {
  if (tubes.length === 0) {
    return (
      <div className="control-section">
        <h3>Tubes ({tubes.length})</h3>
        <p className="info-text">No tubes added yet</p>
      </div>
    );
  }

  return (
    <div className="control-section">
      <h3>Tubes ({tubes.length})</h3>
      <div className="tube-list">
        {tubes.map((tube) => (
          <div
            key={tube.id}
            className={`tube-item ${selectedTubeId === tube.id ? 'selected' : ''}`}
            onClick={() => onSelectTube(tube.id)}
          >
            <div className="tube-info">
              <div className="tube-header">
                <span className="tube-color" style={{ backgroundColor: tube.color }}></span>
                <span className="tube-name">
                  {tube.type === 'square' ? '■' : '▬'} Tube {tube.id.slice(-4)}
                </span>
              </div>
              <div className="tube-dimensions">
                {tube.width} × {tube.height} × {tube.length}
              </div>
            </div>
            <button
              className="btn-remove"
              onClick={(e) => {
                e.stopPropagation();
                onRemoveTube(tube.id);
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TubeList;