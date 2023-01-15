import Boton from './components/Boton';

function App () {
  return (
    <div className="App">
      <form className='formulario'>
        <div className='form-group'>
          <label>Nombre</label>
          <input type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label>Contraseña</label>
          <input type='password' className='form-control' />
        </div>
        {/* TODO: mostrar boton solo si los inputs NO estan vacios */ }
        <Boton
          texto='Iniciar Sesión'
        />
      </form>
    </div>
  );
}

export default App;
