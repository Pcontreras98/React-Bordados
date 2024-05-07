import './App.css';
import Bordado from './componentes/Bordados.js'; 

function App() {
  return (
    <div className="App">
        <h1>Bordados del Perú Wilyco</h1>
        <div className='contenedor-principal'>
          <Bordado
            imagen="bordado1"
            nombre="Bordado uno"
            texto="Diseñado con el mejor bordado tradicional."
          />
          <Bordado
            imagen="bordado2"
            nombre="Bordado dos"
            texto="Diseñado con el mejor bordado tradicional."
          />
          <Bordado
            imagen="bordado3"
            nombre="Bordado tres"
            texto="Diseñado con el mejor bordado tradicional."
          />
           <Bordado
            imagen="bordado4"
            nombre="Bordado cuatro"
            texto="Diseñado con el mejor bordado tradicional."
          />
          <Bordado
            imagen="bordado5"
            nombre="Bordado cinco"
            texto="Diseñado con el mejor bordado tradicional."
          />
          <Bordado
            imagen="bordado6"
            nombre="Bordado seis"
            texto="Diseñado con el mejor bordado tradicional."
          />
        </div>
    </div>
  );
}

export default App;
