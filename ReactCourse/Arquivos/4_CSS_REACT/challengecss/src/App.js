import CarDetails from './components/CarDetails';

import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [cars] = useState([
    { id: 1, brand: "TESLA", km: 10000, price: 100000 },
    { id: 2, brand: "FORD", km: 0, price: 100000 },
    { id: 3, brand: "FORD", km: 30000, price: 100000 },
    { id: 4, brand: "SQUINA", km: 400000, price: 100000 },
    { id: 5, brand: "SQUINA", km: 400000, price: 100000 },
    { id: 6, brand: "SQUINA", km: 400000, price: 100000 },
    { id: 7, brand: "SQUINA", km: 400000, price: 100000 },
    { id: 8, brand: "SQUINA", km: 400000, price: 100000 },
    { id: 9, brand: "SQUINA", km: 400000, price: 100000 },
    { id: 10, brand: "SQUINA", km: 400000, price: 100000 },
    { id: 11, brand: "SQUINA", km: 400000, price: 100000 },
    { id: 12, brand: "SQUINA", km: 400000, price: 100000 },
    { id: 13, brand: "SQUINA", km: 400000, price: 100000 },
    { id: 14, brand: "SQUINA", km: 400000, price: 100000 }
  ]);


  return (
    <div className="App">
      <header className='main_header'>
        <h1>Carros Disponíveis na Loja:</h1>
      </header>

      <main>
        <h2>Nossa equipe só vende tesouro!</h2>
        {cars.map((item) => (<CarDetails key={item.id} brand={item.brand} km={item.km} price={item.price}/>))}
      </main>

      <footer className='main_footer'>
          <h2>Sobre:</h2>
          <p>Carros &copy; LTDA </p>
      </footer>

    </div >
  );
}

export default App;

