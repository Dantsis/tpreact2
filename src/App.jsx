import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import ListadoCitas from './components/ListadoCitas';


function App() {
  const [citas, setCitas] = useState(() => {
    const citasGuardadas = localStorage.getItem('citas');
    return citasGuardadas ? JSON.parse(citasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <div className="container">
      <h1>Gestor de Citas</h1>
      <Formulario agregarCita={agregarCita} />
      <h2>{citas.length > 0 ? 'Citas' : 'No hay citas'}</h2>
      <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
    </div>
  );
}

export default App;
