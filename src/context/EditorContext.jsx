import React, { createContext, useState } from 'react';

// 1. Crea il contesto
// eslint-disable-next-line react-refresh/only-export-components
export const EditorContext = createContext();

// 2. Crea il provider
export const EditorProvider = ({ children }) => {

  const [fileLoaded, setFileLoaded] = useState(false); // Bool: status file caricato


  const [layoutData, setLayoutData] = useState(null); // es. file caricato
  const [blocks, setBlocks] = useState([]); // es. blocchi posizionati
  const [settings, setSettings] = useState({ font: 'Arial', size: 14 });

  const value = {
    fileLoaded,
    setFileLoaded,
    layoutData,
    setLayoutData,
    blocks,
    setBlocks,
    settings,
    setSettings,
  };

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  );
};
