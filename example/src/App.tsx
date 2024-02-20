import React from 'react';
import logo from './logo.svg';
import './App.css';
import JsonDiff from './JsonDiff';

function App() {
  return (
    <JsonDiff 
      currentJson={{a: 1, b: 2, c: 3}}
      oldJson={{a: 1, b: 2, c: 4}}
      isHidden={false}
    />
  );
}

export default App;
