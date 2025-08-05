import React, { useEffect } from 'react';

export default function FileInputProcessor({ file }) {
  useEffect(() => {
    const processFile = async () => {
      if (file.type === 'application/pdf') {
        // logica per PDF
        console.log('PDF caricato:', file.name);
      } else if (file.type === 'text/xml' || file.name.endsWith('.xml')) {
        const text = await file.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        console.log('XML caricato:', xml);
        // qui puoi estrarre dati e salvarli nel contesto
      }
    };

    processFile();
  }, [file]);

  return null; // Nessuna UI per ora
}
