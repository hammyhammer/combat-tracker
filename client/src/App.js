import './App.css';
// import { getEquipment } from './services/dndApi';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './screens/homepage';
function App() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetchEquipment()
    console.log(equipment)
  }, [])

  const fetchEquipment = async () => {
    const response = await fetch(`https://www.dnd5eapi.co/api/equipment`)
    setEquipment(await response.json())
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
