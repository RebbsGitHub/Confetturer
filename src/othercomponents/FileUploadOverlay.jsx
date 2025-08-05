import React, { useState, useContext } from 'react';
import { EditorContext } from '../context/EditorContext';

export default function FileUploadOverlay({ onProcessFile }) {
  const { setLayoutData, setFileLoaded } = useContext(EditorContext);
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConfirm = () => { // clicchi OK ->check ed elaborazione
    if (file) {
      onProcessFile(file); // Estrapola i dati
      setLayoutData(file); // Salva il file nel context (raw data da continuare)
      setFileLoaded(true); // Sblocca l'editor -> setta true e React reacta alle storie di instagram
    }
  };

  return (
    <div
      className="overlay"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="upload-box">
        <h2>Carica un file XML o PDF</h2>
        <input type="file" accept=".xml,.pdf" onChange={handleFileSelect} />
        {file && <p>File selezionato: {file.name}</p>}
        <button onClick={handleConfirm} disabled={!file}>
          OK
        </button>
      </div>
    </div>
  );
}
