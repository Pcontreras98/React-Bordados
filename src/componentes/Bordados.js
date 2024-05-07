
import '../hojaEstilos/Bordados.css'

function Bordados(props) {
    return(
        <div className="contenedor-bordado">
            <img 
                className="imagen-bordado"
                src={require(`../imagenes/imagen-${props.imagen}.jpg`)}
                alt="foto de bordado"
            />
            
            <div className="contenedor-texto-bordado">
                <p className="nombre-bordado">{props.nombre}</p>
                <p className="texto-bordado">{props.texto}</p>
            </div>
        </div>

    );
}

export default Bordados;