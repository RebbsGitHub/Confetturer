export default function EditorTopbar() {
  return (
    <div className="editor-topbar">
      <div className="topbar-section">
        <button>{'←'}</button>
        <button>{'→'}</button>
      </div>
      <div className="topbar-section">
        <select>
          <option>Arial</option>
          <option>Times New Roman</option>
        </select>
        <input type="number" placeholder="Font Size" min={8} max={72} />
        <input type="color" />
      </div>
    </div>
  );
}
