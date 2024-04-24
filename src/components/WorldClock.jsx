import { useState } from 'react';
import Clock from './Clock';


const WorldClock = () => {
  const [clocks, setClocks] = useState([]);
  const [name, setName] = useState('');
  const [offset, setOffset] = useState(0);

  const addClock = () => {
    setClocks([...clocks, { name, offset }]);
    setName('');
    setOffset(0);
  };

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Название" />

      <input 
        type="number" 
        value={offset} 
        onChange={(e) => setOffset(parseInt(e.target.value))} 
        placeholder="Часовой пояс" />

      <button onClick={addClock}>Добавить</button>

      {clocks.map((clock, index) => (
        <Clock
          key={index} 
          name={clock.name} 
          offset={clock.offset} 
          onDelete={() => setClocks(clocks.filter(a => a.name !== clock.name))}/>
      ))}
    </div>
  );
};

export default WorldClock;