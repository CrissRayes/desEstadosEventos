import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Boton from './components/Boton'

function App () {
  const [nombre, setNombre] = useState( '' )
  const [contrasena, setContrasena] = useState( '' )
  const [alerta, setAlerta] = useState( false ) // Estado para el error
  const [mensaje, setMensaje] = useState( '' ) // Estado para el mensaje de error
  const [active, setActive] = useState( false ) // Estado para el botón
  const [color, setColor] = useState( '' ) // Estado para el color de la alerta

  const handleButton = () => {
    if ( [nombre, contrasena].includes( '' ) ) { // verifica si alguno de los campos está vacío
      setActive( false )
    } else {
      setActive( true )
    }
  }

  const handleChange = ( e ) => {
    if ( e.target.name === 'nombre' ) { // verifica si el input es nombre
      setNombre( e.target.value ) // setea el estado con el valor del input
      handleButton()
      setAlerta( false )
    } else {
      setContrasena( e.target.value ) // setea el estado con el valor del input
      handleButton()
      setAlerta( false )
    }
  }

  const handleSubmit = ( e ) => {
    e.preventDefault()
    if ( nombre !== 'ADL' && contrasena !== '252525' ) {
      setColor( 'alert alert-danger' )
      setAlerta( true )
      setMensaje( '⛔️ Los datos son incorrectos!' )
    } else {
      setColor( 'alert alert-success' )
      setAlerta( true )
      setMensaje( '🎉 Sesión iniciada correctamente' )
      setContrasena( '' )
      setNombre( '' )
      setActive( false )
    }
  }

  return (
    <div className="App container">
      <h2 className='mb-5'>Desafío estado de los componentes y eventos</h2>
      <form className='formulario' onSubmit={ handleSubmit }>
        { alerta && <p className={ color }>{ mensaje }</p> }
        <div className='form-group'>
          <label>Nombre</label>
          <input
            name='nombre'
            type='text'
            className='form-control'
            onChange={ handleChange }
            value={ nombre } // le pasa el valor del estado al input
          />

        </div>
        <div className='form-group'>
          <label>Contraseña</label>
          <input
            name='contrasena'
            type='password'
            className='form-control'
            onChange={ handleChange }
            value={ contrasena } // le pasa el valor del estado al input
          />
        </div>
        { active && <Boton>Iniciar Sesión</Boton> } {/* le pasa todas las props al hijo por children */ }
      </form>
    </div>
  );
}

export default App;
