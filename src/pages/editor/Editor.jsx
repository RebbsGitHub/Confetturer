import React from 'react';
import '../../css/editor_style.css';


import EditorTopbar from './EditorTopbar';
import EditorSidebarLeft from './EditorSidebar-left';
import EditorSidebarRight from './EditorSidebar-right';
import EditorDocument from './EditorDocument';

export default function Editor() {
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
