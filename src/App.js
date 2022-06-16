import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Recetas que me gusta preparar</h1>
        <Testimonio 
          nombre='Lasagna'
          ingredientes='600 gramos de pechuga de pollo, 400 gramos de salsa de tomate,
          1/2 cebolla grande picada, 2 dientes de ajo picados, 
          1/2 cucharadita de orégano, 1 pizca de tomillo, 
          1/4 de cucharada de sal, 1 hoja de laurel, 9 a 12 láminas de pasta para lasaña, 
          queso parmesano rallado,
          300 gramos de queso mozzarella rallado, 200 gramos de queso mozzarella en rebanadas'
          imagen='lasana'
          
        />
        <Testimonio 
          nombre='Enchiladas Suizas'
          ingredientes=''
          imagen='enchiladas'
          
        />
        <Testimonio 
          nombre='Spaguetti'
          ingredientes=''
          imagen='pasta'
          
        />
        <Testimonio 
          nombre='Papas rellenas'
          ingredientes='https://www.youtube.com/watch?v=4La7yZoW9_Q'
          imagen='papa'
          
        />

      </div>
      
    </div>
  );
}

export default App;
