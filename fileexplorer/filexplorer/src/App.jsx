
import React, { useState } from 'react'
import './App.css'
import explorer from './data/folderData'
import Folder from './components/Folder'
import useTraversetree from './hooks/useTraversetree'

const App = () => {
  const [explorerData, setExplorerData] = useState(explorer)
  const { insertNode} = useTraversetree();

  const handleInsertNode =(folderId,item,isFolder)=>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder);
    setExplorerData(finalTree);

  }

  return (
    <div className='App'><Folder handleInsertNode={handleInsertNode} explorer={explorerData}/></div>
  )
}

export default App
