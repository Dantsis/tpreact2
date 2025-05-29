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
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="form-y-citas">
        <div>
          <h2>CREAR MI CITA</h2>
          <Formulario agregarCita={agregarCita} />
        </div>
        <div className="citas">
          <h2>ADMINISTRA TUS CITAS</h2>
          <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </div>
  );
  
}

export default App;
