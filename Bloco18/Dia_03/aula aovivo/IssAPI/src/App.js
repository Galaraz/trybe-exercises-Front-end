import React, { useContext } from 'react';
import ISSContext from './Context/ISSContext';
import ISSLocation from './Components/ISSLocation';
import ToggleMap from './Components/ToggleMap';
import PeopleInSpace from './Components/PeopleInSpace';
import './App.css';


function App() {
  const { showMap } = useContext(ISSContext);
  return (
    <div className="App">
      <h1>International Space Station Location Tracker</h1>
      <ToggleMap />
      {showMap && <ISSLocation />}
      <PeopleInSpace />
    </div>
  );
}

export default App;