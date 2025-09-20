import React, { useState } from 'react';

function App() {
  // Estados para los inputs
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Estados para los errores
  const [errorNombre, setErrorNombre] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorContrasena, setErrorContrasena] = useState('');

  // Validación en tiempo real para Nombre
  const handleNombreChange = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    setErrorNombre(valor.trim() === '' ? 'El nombre es obligatorio' : '');
  };

  // Validación en tiempo real para Correo
  const handleCorreoChange = (e) => {
    const valor = e.target.value;
    setCorreo(valor);
    setErrorCorreo(
      valor && !valor.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        ? 'Correo inválido'
        : ''
    );
  };

  // Validación en tiempo real para Contraseña
  const handleContrasenaChange = (e) => {
    const valor = e.target.value;
    setContrasena(valor);
    setErrorContrasena(
      valor && valor.length < 8
        ? 'La contraseña debe tener al menos 8 caracteres'
        : ''
    );
  };

  // Función al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación final antes de enviar
    if (nombre.trim() === '') {
      setErrorNombre('El nombre es obligatorio');
      return;
    }
    if (!correo.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrorCorreo('Correo inválido');
      return;
    }
    if (contrasena.length < 8) {
      setErrorContrasena('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    alert(`Nombre: ${nombre}\nCorreo: ${correo}\nContraseña: ${contrasena}`);

    // Limpiar campos después de enviar
    setNombre('');
    setCorreo('');
    setContrasena('');
    setErrorNombre('');
    setErrorCorreo('');
    setErrorContrasena('');
  };

  return (
    <div 
  className="container mt-5 p-4 shadow rounded" 
  style={{ maxWidth: '500px', backgroundColor: '#f8f9fa', fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="mb-4">Formulario React</h2>
      <form onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={handleNombreChange}
          />
          {errorNombre && <div className="text-danger mt-1">{errorNombre}</div>}
        </div>

        {/* Correo */}
        <div className="mb-3">
          <label className="form-label">Correo:</label>
          <input
            type="email"
            className="form-control"
            value={correo}
            onChange={handleCorreoChange}
          />
          {errorCorreo && <div className="text-danger mt-1">{errorCorreo}</div>}
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={contrasena}
            onChange={handleContrasenaChange}
          />
          {errorContrasena && (
            <div className="text-danger mt-1">{errorContrasena}</div>
          )}
        </div>

        {/* Botón enviar */}
       <button
         type="submit"
         className="btn btn-primary w-100 fw-bold"
         disabled={errorNombre || errorCorreo || errorContrasena}
       >
        Enviar
       </button>
      </form>
    </div>
  );
}

export default App;


//Qué hace este código
//Usamos useState para controlar los valores de cada input.
//onChange actualiza el estado en tiempo real.
//handleSubmit muestra un alert con los valores al enviar el formulario.
//Un estilo simple para centrar y limitar el ancho del formulario.