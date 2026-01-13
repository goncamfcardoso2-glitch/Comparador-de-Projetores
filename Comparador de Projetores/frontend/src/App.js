import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [projectors, setProjectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tenta ir buscar os dados à API que criámos no Flask
    axios.get('/api/deals')
      .then(response => {
        setProjectors(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao carregar projetores:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Comparador de Projetores</h1>
      {loading ? (
        <p>A carregar ofertas...</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {projectors.map((p, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
              <h2>{p.name}</h2>
              <p><strong>Tecnologia:</strong> {p.technology}</p>
              <p><strong>Resolução:</strong> {p.resolution}</p>
              <p><strong>Input Lag:</strong> {p.input_lag_ms}ms</p>
              <p style={{ color: 'green', fontWeight: 'bold' }}>Preço: {p.price}€</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;