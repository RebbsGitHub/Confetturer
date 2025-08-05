/* export default function EditorDocument() {
  return (
    <div className="editor-document">
      <div className="document-a4">
        <p>Trascina qui i blocchi</p>
      </div>
    </div>
  );
} */

import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';


export default function EditorDocument() {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);
  const GRID_SIZE = 50; // dimensione di una cella in px

  useEffect(() => {
    // 1) inizializza la canvas
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: '#f9f9f9',
      width: 794,   //  A4
      height: 1123,
      selection: false,
    });
    fabricRef.current = canvas;

    // 2) disegna la griglia
    for (let i = 0; i < canvas.width / GRID_SIZE; i++) {
      canvas.add(new fabric.Line([ i * GRID_SIZE, 0, i * GRID_SIZE, canvas.height ], {
        stroke: '#000', selectable: false, evented: false
      }));
    }
    for (let i = 0; i < canvas.height / GRID_SIZE; i++) {
      canvas.add(new fabric.Line([ 0, i * GRID_SIZE, canvas.width, i * GRID_SIZE ], {
        stroke: '#000', selectable: false, evented: false
      }));
    }

    // 3) snap-to-grid on move
    canvas.on('object:moving', ({ target }) => {
      target.set({
        left: Math.round(target.left / GRID_SIZE) * GRID_SIZE,
        top : Math.round(target.top  / GRID_SIZE) * GRID_SIZE,
      });
    });

    return () => canvas.dispose();
  }, []);
  
  return (
    <div className="editor-document">
      <canvas ref={canvasRef}/>
    </div>
  );
}
