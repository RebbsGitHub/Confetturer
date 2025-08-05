import React, { useContext, useState } from 'react';
import '../../css/editor_style.css';
import { EditorContext } from '../../context/EditorContext';

import EditorTopbar from './EditorTopbar';
import EditorSidebarLeft from './EditorSidebar-left';
import EditorSidebarRight from './EditorSidebar-right';
import EditorDocument from './EditorDocument';

import FileUploadOverlay from '../../othercomponents/FileUploadOverlay';
import FileInputProcessor from '../../editor-files/FileInputProcessor';

export default function Editor() {
  const { fileLoaded, layoutData } = useContext(EditorContext);
  const [uploadedFile, setUploadedFile] = useState(null);

  console.log("Layout data:", layoutData);

  return (
    <>
      {!fileLoaded && (
        <FileUploadOverlay onProcessFile={(file) => setUploadedFile(file)} />
      )}
      {uploadedFile && <FileInputProcessor file={uploadedFile} />} 
      {fileLoaded && (
        <div className="editor-container">
          <EditorTopbar />
          <div className="editor-main">
            <EditorSidebarLeft />
            <EditorDocument />
            <EditorSidebarRight />
          </div>
        </div>
      )}
    </>
  );
}


/* 
  return (
    <div className="editor-container">
      <EditorTopbar />

      <div className="editor-main">
        <EditorSidebarLeft />
        <EditorDocument />
        <EditorSidebarRight/>
      </div>
    </div>
  );
}
 */