import React, { useState } from 'react';
import './App.css';
import DataInput from './components/data-input/data-input-component';
import DataOutput from './components/data-output/data-output-component';

function App() {
  const [dados, setDados] = useState([]);

  const handleSendData = (data) =>{
    setDados([...dados, data]);
  };

  const handleRemoveData = (index) =>{
    const newDados = [...dados];
    newDados.splice(index, 1);
    setDados(newDados);
  };
  
  return (
    <div className='main-align'>      
      <div>  
        <DataInput onSendData={handleSendData} />    
      </div>  
      <div>        
        <DataOutput data={dados} onRemoveData={handleRemoveData} />    
      </div> 
    </div>
  );
}

export default App;
