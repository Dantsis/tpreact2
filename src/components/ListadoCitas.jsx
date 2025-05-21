import Cita from './Cita';

function ListadoCitas({ citas, eliminarCita }) {
  return (
    <div>
      <h2>{citas.length > 0 ? 'Listado de Citas' : 'No hay citas registradas'}</h2>
      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
      ))}
    </div>
  );
}

export default ListadoCitas;
