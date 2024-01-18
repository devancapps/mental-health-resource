// src/App.js
import React from 'react';
import './App.css';
import ResourceList from './components/ResourceList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mental Health Resources</h1>
      </header>
      <main>
        <ResourceList />
      </main>
    </div>
  );
}

export default App;
