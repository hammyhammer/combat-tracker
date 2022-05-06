import './App.css';
// import { getEquipment } from './services/dndApi';
import { useState, useEffect } from 'react';

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
      Hello
      <div>
      </div>
    </div>
  );
}

export default App;
