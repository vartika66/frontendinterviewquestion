import React, { useState } from "react";

const Folder = ({ handleInsertNode = () => {}, explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  console.log(explorer);
  if (explorer && explorer.isFolder) {
    return (
      <>
        <div style={{ marginTop: 5 }}>
          <div onClick={() => setExpand(!expand)} className="folder">
            <span>📁 {explorer.name}</span>

            <div>
              <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
              <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            </div>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: "10px" }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                className="inputContainer__input"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((item) => {
            return <Folder handleInsertNode={handleInsertNode} explorer={item} key={item.id} />;
          })}
        </div>
      </>
    );
  } else if (explorer) {
    return <span>📄{explorer.name}</span>;
  } else {
    return null; // Handle case when explorer is undefined
  }
};

export default Folder;
