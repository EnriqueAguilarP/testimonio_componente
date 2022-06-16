import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Recetas que me gusta preparar</h1>
        <Testimonio 
          nombre='Lasagna'
          ingredientes='1/2 cebolla grande picada, 2 dientes de ajo picados, 3 cucharadas de mantequilla,
          1 cucharada aceite de oliva, 1/2 cucharadita de orégano, 1 pizca de tomillo, 
          1/4 de cucharada de sal, 1 hoja de laurel, 9 a 12 láminas de pasta para lasaña, queso parmesano rallado,
          300 gramos de queso mozzarella rallado, 200 gramos de queso mozzarella en rebanadas'
          imagen='lasana'
          url='https://www.youtube.com/watch?v=vsJY_CCb4aQ'
        />
        <Testimonio 
          nombre='Enchiladas Suizas'
          ingredientes=''
          imagen='enchiladas'
          url=''
        />
        <Testimonio 
          nombre='Spaguetti'
          ingredientes=''
          imagen='pasta'
          url=''
        />
      </div>
      
    </div>
  );
}

export default App;
