import React, { useState } from 'react';
import Canvas3D from './components/Canvas3D';
import ControlPanel from './components/ControlPanel';
import { useTubeManager } from './hooks/useTubeManager';
import './App.css';

function App() {
  const {
    tubes,
    selectedTubeId,
    setSelectedTubeId,
    addTube,
    updateTube,
    removeTube,
    undo,
    redo,
    clearAll,
    canUndo,
    canRedo,
  } = useTubeManager();

  const [wireframe, setWireframe] = useState(false);
  const [showJoints, setShowJoints] = useState(true);

  const handleAddTube = (tubeData) => {
    // For square tubes, set height equal to width
    if (tubeData.type === 'square') {
      tubeData.height = tubeData.width;
    }
    addTube(tubeData);
  };

  const toggleWireframe = () => {
    setWireframe(!wireframe);
  };

  const toggleJoints = () => {
    setShowJoints(!showJoints);
  };

  return (
    <div className="app">
      <ControlPanel
        tubes={tubes}
        selectedTubeId={selectedTubeId}
        onAddTube={handleAddTube}
        onSelectTube={setSelectedTubeId}
        onUpdateTube={updateTube}
        onRemoveTube={removeTube}
        wireframe={wireframe}
        onToggleWireframe={toggleWireframe}
        showJoints={showJoints}
        onToggleJoints={toggleJoints}
        onUndo={undo}
        onRedo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
        onClearAll={clearAll}
      />
      
      <Canvas3D
        tubes={tubes}
        selectedTubeId={selectedTubeId}
        onSelectTube={setSelectedTubeId}
        onUpdateTube={updateTube}
        wireframe={wireframe}
        showJoints={showJoints}
      />
    </div>
  );
}

export default App;