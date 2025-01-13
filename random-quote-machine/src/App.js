import { useState } from 'react';
import './App.css';
import WrapperElement from './components/WrapperElement';

function App() {
  const [colors, setColors] = useState({ a: "#555342", b: "#6F6C56" });

  function generaColoreRGB() {
    const rosso = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const blu = Math.floor(Math.random() * 256);
    return `rgb(${rosso}, ${verde}, ${blu})`;
  }

  function handleNewQuote() {
    const nuovoColore = generaColoreRGB();
    const nuovoColore2 = generaColoreRGB();
    setColors({ a: nuovoColore, b: nuovoColore2 });
  }

  return (
    <div
      style={{
        backgroundColor: colors.a,
        transition: 'background-color 0.2s ease', 
      }}
      className='vh-100 d-flex justify-content-center align-items-center'
    >
      <WrapperElement colors={colors} handleNewQuote={handleNewQuote} />
    </div>
  );
}

export default App;
