import React from 'react';
import TubeControls from './TubeControls';
import JointControls from './JointControls';
import ViewControls from './ViewControls';
import TubeList from './TubeList';

const ControlPanel = ({
  tubes,
  selectedTubeId,
  onAddTube,
  onSelectTube,
  onUpdateTube,
  onRemoveTube,
  wireframe,
  onToggleWireframe,
  showJoints,
  onToggleJoints,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onClearAll,
}) => {
  const selectedTube = tubes.find((tube) => tube.id === selectedTubeId);

  return (
    <div className="control-panel">
      <div className="panel-header">
        <h2>Tube Joint Visualizer</h2>
        <p className="subtitle">Create and manipulate 3D tube joints</p>
      </div>

      <div className="panel-content">
        <TubeControls onAddTube={onAddTube} />
        
        <JointControls
          selectedTube={selectedTube}
          onUpdateTube={onUpdateTube}
        />
        
        <ViewControls
          wireframe={wireframe}
          onToggleWireframe={onToggleWireframe}
          showJoints={showJoints}
          onToggleJoints={onToggleJoints}
          onUndo={onUndo}
          onRedo={onRedo}
          canUndo={canUndo}
          canRedo={canRedo}
          onClearAll={onClearAll}
        />
        
        <TubeList
          tubes={tubes}
          selectedTubeId={selectedTubeId}
          onSelectTube={onSelectTube}
          onRemoveTube={onRemoveTube}
        />
      </div>
    </div>
  );
};

export default ControlPanel;