import { useState } from 'react'
import Boton from './components/Boton'


function App () {
  // Estados de los inputs
  const [nombre, setNombre] = useState( '' )
  const [contrasena, setContrasena] = useState( '' )
  const [mostrarBoton, setMostrarBoton] = useState( false )
  const [error, setError] = useState( false )
  const [mensaje, setMensaje] = useState( '' )

  const validarDatos = ( e ) => {
    e.preventDefault()

    if ( nombre === '' || contrasena === '' ) {
      setError( true )
      setMensaje( '⚠️ Todos los campos son obligatorios' )

      return
    }

    if ( nombre !== 'ADL' && contrasena !== '252525' ) {
      setError( true )
      setMensaje( '⛔️ Los datos son incorrectos!' )
      return
    } else {
      alert( 'Sesión iniciada correctamente' )
      setError( false )
      setMensaje( '' )
      setContrasena( '' )
      setNombre( '' )
      setMostrarBoton( false )
    }

  }

  return (
    <div className="App">
      <form className='formulario' onSubmit={ validarDatos }>
        { error && <p className='alert alert-danger'>{ mensaje }</p> }
        <div className='form-group'>
          <label>Nombre</label>
          <input
            type='text'
            className='form-control'
            onChange={ ( e ) => {
              setNombre( e.target.value )
              setMostrarBoton( true )
            } }
            value={ nombre }
          />

        </div>
        <div className='form-group'>
          <label>Contraseña</label>
          <input
            type='password'
            className='form-control'
            onChange={ ( e ) => {
              setContrasena( e.target.value )
              setMostrarBoton( true )
            } }
            value={ contrasena }
          />
        </div>
        { mostrarBoton && <Boton texto="Iniciar Sesión" /> }
      </form>
    </div>
  );
}

export default App;
