import './App.css';
import React from 'react';

function clickedon(){
  alert('clicked!')
}

function App() {
  return (
    <div className="App">
      <button onClick={clickedon}>
        start
      </button>

    </div>
  );
}

export default App;
