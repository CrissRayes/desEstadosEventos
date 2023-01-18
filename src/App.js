import { useState } from 'react'
import Boton from './components/Boton'

function App () {
  // Estados de los inputs
  const [nombre, setNombre] = useState( '' )
  const [contrasena, setContrasena] = useState( '' )
  const [error, setError] = useState( false )
  const [mensaje, setMensaje] = useState( '' )
  const [active, setActive] = useState( false )

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
      setActive( false ) // Desactiva el botón
    }

  }

  return (
    <div className="App">
      <h1>Desafío estado de los componentes y eventos</h1>
      <form className='formulario' onSubmit={ validarDatos }>
        { error && <p className='alert alert-danger'>{ mensaje }</p> }
        <div className='form-group'>
          <label>Nombre</label>
          <input
            type='text'
            className='form-control'
            onChange={ ( e ) => {
              setNombre( e.target.value )
              setActive( true ) // Activa el botón
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
              setActive( true ) // Activa el botón 
            } }
            value={ contrasena }
          />
        </div>
        { active && <Boton texto="Iniciar Sesión" /> }
      </form>
    </div>
  );
}

export default App;
