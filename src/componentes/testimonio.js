import React from 'react';
import '../styleSheets/testimonio.css';
function Testimonio(props){
  return(
    <div className = 'contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src={require(`../imagenes/${props.imagen}.jpg`)}
      alt='Foto de comida'
      />
      <div className='contenedor-texto'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong>
          </p>
        <p className='ingredientes'>Ingredientes: </p>
        <p className="texto-testimonio">{props.ingredientes}</p>
        <p className='url'>{props.url}</p>
      </div>

    </div>
  );
}

export default Testimonio;