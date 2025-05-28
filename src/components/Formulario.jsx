import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Formulario({ agregarCita }) {
  const [mascota, setMascota] = useState('');
  const [dueño, setDueño] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([mascota, dueño, fecha, hora, sintomas].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    const nuevaCita = {
      id: uuidv4(),
      mascota,
      dueño,
      fecha,
      hora,
      sintoma
    };

    agregarCita(nuevaCita);

    // Limpiar formulario
    setMascota('');
    setDueño('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <div>
      <h2>Crear Cita</h2>
      {error && <div className="error">Todos los campos son obligatorios</div>}
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input value={mascota} onChange={(e) => setMascota(e.target.value)} />
        
        <label>Nombre Dueño</label>
        <input value={dueño} onChange={(e) => setDueño(e.target.value)} />
        
        <label>Fecha</label>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        
        <label>Hora</label>
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        
        <label>Síntomas</label>
        <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} />

        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;
