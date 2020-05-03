import React from 'react';
import './App.css';
import ControlledTreeView from './components/TreeView/treeView';
import Navigation from './components/Navigation/navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ControlledTreeView/>
      
    </div>
  );
}

export default App;
