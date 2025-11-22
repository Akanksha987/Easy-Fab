import { useState, useCallback } from 'react';

export const useTubeManager = () => {
  const [tubes, setTubes] = useState([]);
  const [selectedTubeId, setSelectedTubeId] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const addToHistory = useCallback((newTubes) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(newTubes)));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const addTube = useCallback((tubeData) => {
    const newTube = {
      id: Date.now().toString(),
      type: tubeData.type || 'rectangular',
      width: tubeData.width || 5,
      height: tubeData.height || 5,
      length: tubeData.length || 10,
      thickness: tubeData.thickness || 0.5,
      position: tubeData.position || { x: 0, y: 0, z: 0 },
      rotation: tubeData.rotation || { x: 0, y: 0, z: 0 },
      color: tubeData.color || '#3b82f6',
    };

    const newTubes = [...tubes, newTube];
    setTubes(newTubes);
    addToHistory(newTubes);
    setSelectedTubeId(newTube.id);
  }, [tubes, addToHistory]);

  const updateTube = useCallback((tubeId, updates) => {
    const newTubes = tubes.map((tube) =>
      tube.id === tubeId ? { ...tube, ...updates } : tube
    );
    setTubes(newTubes);
    addToHistory(newTubes);
  }, [tubes, addToHistory]);

  const removeTube = useCallback((tubeId) => {
    const newTubes = tubes.filter((tube) => tube.id !== tubeId);
    setTubes(newTubes);
    addToHistory(newTubes);
    if (selectedTubeId === tubeId) {
      setSelectedTubeId(null);
    }
  }, [tubes, selectedTubeId, addToHistory]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setTubes(JSON.parse(JSON.stringify(history[historyIndex - 1])));
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setTubes(JSON.parse(JSON.stringify(history[historyIndex + 1])));
    }
  }, [history, historyIndex]);

  const clearAll = useCallback(() => {
    setTubes([]);
    setSelectedTubeId(null);
    addToHistory([]);
  }, [addToHistory]);

  return {
    tubes,
    selectedTubeId,
    setSelectedTubeId,
    addTube,
    updateTube,
    removeTube,
    undo,
    redo,
    clearAll,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
  };
};