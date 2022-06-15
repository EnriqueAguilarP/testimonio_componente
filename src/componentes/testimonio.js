import React from 'react';
function Testimonio(){
  return(
    <div className = 'contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src={require('../imagenes/enchiladas.jpg')}
      alt='Foto de comida'
      />
      <div className='contenedor-texto'>
        <p className='nombre-testimonio'>Nombre del platillo</p>
        <p className='ingredientes'>ingredientes</p>
        <p className="texto-testimonio">Pasta, leche, crema</p>
      </div>

    </div>
  );
}