import { useState } from 'react';
import './App.css';
import TictacToe from './components/TictacToe';


function App(){
 

 
  return(
    <TictacToe boardSize={4} />
  )
}
export default App;