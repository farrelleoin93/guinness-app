import React from 'react';
import NavBar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Map from './components/Map/Map';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Map />
    </div>
  );
}

export default App;
