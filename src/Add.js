import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <input type="text" onChange={props.ontextchange} value={props.text}/>
      <button onClick={props.onbuttonclick}>ADD</button>
    </div>
  );
}

export default App;
